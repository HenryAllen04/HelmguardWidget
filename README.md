# HelmGuard Demo Widget

<!-- Purpose: This README provides comprehensive documentation for the HelmGuard Demo Widget MVP -->

A React-based embeddable widget that demonstrates HelmGuard's automated cybersecurity questionnaire response capabilities. The widget allows users to ask cybersecurity-related questions and receive automated answers based on pre-configured Q&A pairs.

## 🚀 Features

- **Intelligent Q&A Matching**: Uses text similarity algorithms to match user questions with relevant answers
- **Professional UI**: Clean, modern interface with HelmGuard branding
- **Embeddable**: Multiple embedding options for integration into any website
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Real-time Chat**: Interactive chat interface with loading states and animations
- **Fallback Mechanism**: Provides contact information when no suitable answer is found

## 📦 Quick Start

### For Development

1. **Clone and Install**
   ```bash
   git clone https://github.com/HenryAllen04/HelmguardWidget.git
   cd helmguard-widget
   npm install
   ```

2. **Run Development Server**
   ```bash
   npm start
   ```
   Visit `http://localhost:3000` to see the demo page with the widget.

3. **Build Widget Bundle**
   ```bash
   npm run build:widget
   ```
   This creates embeddable files in the `/dist` directory.

### For Embedding

Choose one of three embedding methods:

#### Method 1: Auto-Initialize (Recommended)
```html
<!-- Add to your website's head or before closing body tag -->
<link rel="stylesheet" href="path/to/helmguard-widget.css">
<script src="path/to/helmguard-widget.js" data-auto-init="true"></script>
```

#### Method 2: Manual Initialization
```html
<link rel="stylesheet" href="path/to/helmguard-widget.css">
<script src="path/to/helmguard-widget.js"></script>
<script>
  // Initialize when ready
  HelmGuardWidget.init();
  
  // Or specify a container
  // HelmGuardWidget.init('my-widget-container');
</script>
```

#### Method 3: Iframe Embedding
```html
<iframe 
  src="https://your-domain.com/helmguard-demo" 
  width="100%" 
  height="700" 
  frameborder="0">
</iframe>
```

## 🎯 How It Works

1. **Question Input**: Users type cybersecurity questions in the chat interface
2. **Similarity Matching**: The widget uses Jaccard similarity with security term boosting to find the best matching Q&A pair
3. **Confidence Scoring**: Answers are only displayed if confidence score ≥ 0.75
4. **Fallback Response**: Low-confidence queries receive a helpful message with contact information

## 📊 Data Format

The widget uses Q&A pairs stored in JSON format:

```json
[
  {
    "question": "What is your password policy?",
    "answer": "Our password policy requires..."
  }
]
```

Current dataset: 25 common cybersecurity questionnaire Q&A pairs from `Questionnaire_export.csv`.

## 🛠 Development

### Project Structure
```
src/
├── components/HelmGuardWidget/
│   ├── WidgetContainer.js       # Main widget container
│   ├── ChatInterface.js         # Chat interface logic
│   ├── Message.js              # Individual message component
│   ├── InputArea.js            # User input handling
│   └── *.css                   # Component styles
├── utils/
│   └── questionMatcher.js      # Q&A matching algorithm
├── data/
│   └── questionnaire.json      # Q&A dataset
└── widget-entry.js            # Embeddable widget entry point
```

### Key Technologies
- **React 19**: Modern React with hooks
- **Webpack**: Bundle optimization for embedding
- **CSS3**: Professional styling with animations
- **Text Similarity**: Jaccard similarity with security term boosting

### Customization

#### Updating Q&A Data
1. Modify `Questionnaire_export.csv`
2. Run `node scripts/convertCsvToJson.js`
3. Rebuild with `npm run build:widget`

#### Styling Changes
- Edit CSS files in `src/components/HelmGuardWidget/`
- Main colors: `#2563EB` (primary blue), `#3B82F6` (lighter blue)
- Rebuild widget after changes

#### Matching Algorithm
- Modify `src/utils/questionMatcher.js`
- Adjust confidence threshold (currently 0.75)
- Add custom security terms for boosting

## 🧪 Testing

### Development Testing
```bash
npm start  # Test in development mode
```

### Embedding Testing
1. Build widget: `npm run build:widget`
2. Open `examples/embed-example.html` in browser
3. Test widget functionality

### Example Questions to Test
- "What is your password policy?"
- "How do you handle incident response?"
- "What encryption standards do you use?"
- "Do you have a CISO?"
- "How often do you conduct security assessments?"

## 📈 Performance

- **Bundle Size**: ~243 KB (minimized)
- **Load Time**: <2 seconds on standard connections
- **Response Time**: Instant Q&A matching (client-side processing)

## 🔧 Configuration Options

### Confidence Threshold
Adjust in `src/components/HelmGuardWidget/ChatInterface.js`:
```javascript
if (match.confidence >= 0.75) { // Adjust this value
```

### Contact Information
Update in `src/components/HelmGuardWidget/Message.js`:
```javascript
href="https://helmguard.ai/contact" // Update URL
```

### Widget Styling
Primary colors defined in CSS custom properties:
- Primary Blue: `#2563EB`
- Secondary Blue: `#3B82F6`
- Background: `#f8f9fa`

## 🚀 Deployment

### Static Hosting (Recommended)
1. Build widget: `npm run build:widget`
2. Upload `/dist` files to your CDN/hosting
3. Update paths in embedding code

### Suggested Platforms
- **Netlify**: Automatic deployments from Git
- **Vercel**: Optimized for React applications
- **GitHub Pages**: Free hosting for public repositories
- **AWS S3 + CloudFront**: Enterprise-grade distribution

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make changes and test thoroughly
4. Submit a pull request

### Development Workflow
```bash
git checkout -b feature/your-feature-name
npm start  # Development testing
npm run build:widget  # Build testing
# Test embedding with examples/embed-example.html
git commit -m "Add your feature"
git push origin feature/your-feature-name
```

## 📋 Roadmap

### Current MVP Features ✅
- Basic Q&A matching with confidence scoring
- Professional chat interface
- Multiple embedding options
- Responsive design

### Planned Enhancements 🔄
- Document upload functionality for custom knowledge base
- Advanced LLM integration for dynamic answer generation
- Analytics and usage tracking
- Multi-language support
- API integration for real-time data updates

## 🆘 Support

For questions, issues, or feature requests:
- **Email**: support@helmguard.ai
- **GitHub Issues**: [Create an issue](https://github.com/HenryAllen04/HelmguardWidget/issues)
- **Documentation**: This README and inline code comments

## 📄 License

MIT License - see [LICENSE](LICENSE) file for details.

## 🏷️ Version

**Current Version**: 0.1.0 (MVP)
**Last Updated**: December 2024
**Node.js**: >=16.0.0
**React**: 19.1.0