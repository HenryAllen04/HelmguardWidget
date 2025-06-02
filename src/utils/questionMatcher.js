// Purpose: Question matching utility for finding the best matching Q&A pair using text similarity

/**
 * Calculate similarity between two strings using a simple approach
 * This is a placeholder for the MVP - in production, we'd use proper sentence embeddings
 */
const calculateSimilarity = (str1, str2) => {
  // Convert to lowercase and remove extra whitespace
  const s1 = str1.toLowerCase().trim();
  const s2 = str2.toLowerCase().trim();

  // Simple word overlap similarity
  const words1 = s1.split(/\s+/);
  const words2 = s2.split(/\s+/);
  
  // Remove common stop words for better matching
  const stopWords = new Set(['the', 'is', 'at', 'which', 'on', 'and', 'a', 'an', 'as', 'are', 'was', 'were', 'been', 'be', 'have', 'has', 'had', 'do', 'does', 'did', 'will', 'would', 'could', 'should', 'may', 'might', 'must', 'can', 'of', 'to', 'in', 'for', 'with', 'by', 'from', 'about', 'into', 'through', 'during', 'before', 'after', 'above', 'below', 'up', 'down', 'out', 'off', 'over', 'under', 'again', 'further', 'then', 'once']);
  
  const filterWords = (words) => words.filter(word => !stopWords.has(word) && word.length > 2);
  
  const filteredWords1 = filterWords(words1);
  const filteredWords2 = filterWords(words2);
  
  // Find common words
  const set1 = new Set(filteredWords1);
  const set2 = new Set(filteredWords2);
  const intersection = new Set([...set1].filter(x => set2.has(x)));
  
  // Calculate Jaccard similarity
  const union = new Set([...set1, ...set2]);
  const jaccardSimilarity = union.size > 0 ? intersection.size / union.size : 0;
  
  // Check for key security terms that should boost similarity
  const securityTerms = ['encryption', 'security', 'password', 'authentication', 'mfa', 'multi-factor', 'access', 'control', 'audit', 'compliance', 'gdpr', 'iso', 'soc', 'incident', 'response', 'backup', 'recovery', 'vulnerability', 'assessment', 'penetration', 'testing', 'risk', 'vendor', 'third-party', 'data', 'classification', 'training', 'awareness', 'continuity', 'disaster', 'privileged', 'cloud', 'monitoring', 'board', 'ciso'];
  
  const hasCommonSecurityTerms = securityTerms.some(term => 
    s1.includes(term) && s2.includes(term)
  );
  
  // Boost similarity if both questions contain security terms
  const similarity = hasCommonSecurityTerms ? Math.min(jaccardSimilarity + 0.2, 1) : jaccardSimilarity;
  
  return similarity;
};

/**
 * Find the best matching Q&A pair for a given question
 */
export const findBestMatch = (userQuestion, questionnaireData) => {
  let bestMatch = null;
  let highestScore = 0;

  questionnaireData.forEach(qa => {
    const similarity = calculateSimilarity(userQuestion, qa.question);
    
    if (similarity > highestScore) {
      highestScore = similarity;
      bestMatch = qa;
    }
  });

  return {
    question: bestMatch?.question || null,
    answer: bestMatch?.answer || null,
    confidence: highestScore
  };
}; 