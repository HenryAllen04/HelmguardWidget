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
- **CDN Ready**: Optimized for fast global delivery via jsDelivr CDN

## ⚡ Ultra-Quick Embed (2 Lines!)

**For Webflow, WordPress, or any website:**

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/HenryAllen04/HelmguardWidget@main/dist/helmguard-widget.css">
<script src="https://cdn.jsdelivr.net/gh/HenryAllen04/HelmguardWidget@main/dist/helmguard-widget.js" data-auto-init="true"></script>
```

**That's it!** The widget will automatically appear as a blue chat button in the bottom-right corner.

### 🎯 Why It's So Fast

- **Global CDN**: Files served from 120+ locations worldwide via jsDelivr
- **Pre-compiled**: React app already built and optimized (243KB total)
- **Client-side Processing**: No server calls needed for Q&A matching
- **Browser Caching**: Files cached after first load
- **Single Bundle**: Everything packaged in one optimized file

## 📦 Development Setup

### Local Development

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

## 🌐 Embedding Options

### Method 1: CDN Auto-Initialize (Recommended)
```html
<!-- Add to your website's head section -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/HenryAllen04/HelmguardWidget@main/dist/helmguard-widget.css">
<script src="https://cdn.jsdelivr.net/gh/HenryAllen04/HelmguardWidget@main/dist/helmguard-widget.js" data-auto-init="true"></script>
```

### Method 2: Self-Hosted with Manual Init
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

### Method 3: Iframe Embedding
```html
<iframe 
  src="https://your-domain.com/helmguard-demo" 
  width="100%" 
  height="700" 
  frameborder="0">
</iframe>
```

## 🧪 Testing Your Integration

**Live Test Page**: Open `test-widget.html` in your browser to see the widget in action and copy the embed code.

### Sample Questions to Test:
- "What is your password policy?"
- "How do you handle incident response?"
- "What encryption standards do you use?"
- "Do you have a CISO?"
- "How often do you conduct security assessments?"

## 🎯 How It Works (Technical)

### **1. Instant Loading**
- Widget files (CSS + JS) served from global CDN
- React components pre-compiled and optimized
- Auto-initialization via `data-auto-init="true"`

### **2. Smart Q&A Matching**
1. User types question → Text preprocessing
2. Jaccard similarity calculation with security term boosting
3. Confidence scoring (threshold: 0.75)
4. Best match returned or fallback message

### **3. Zero Backend Required**
- All 25 Q&A pairs embedded in bundle
- Client-side text processing
- No API calls or server dependencies

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

## 🛠 Development Architecture

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
- **jsDelivr CDN**: Global content delivery network

### Build Process
```bash
npm run build:widget  # Creates optimized bundle
```
Output: `/dist/helmguard-widget.js` (239KB) + `/dist/helmguard-widget.css` (4KB)

## ⚙️ Customization

### Updating Q&A Data
1. Modify `Questionnaire_export.csv`
2. Run `node scripts/convertCsvToJson.js`
3. Rebuild with `npm run build:widget`

### Styling Changes
- Edit CSS files in `src/components/HelmGuardWidget/`
- Main colors: `#2563EB` (primary blue), `#3B82F6` (lighter blue)
- Rebuild widget after changes

### Matching Algorithm Tuning
- Modify `src/utils/questionMatcher.js`
- Adjust confidence threshold (currently 0.75)
- Add custom security terms for boosting

## 📈 Performance Metrics

- **Bundle Size**: 243 KB total (optimized)
- **Load Time**: <1 second on fast connections
- **Response Time**: Instant Q&A matching (client-side)
- **CDN Coverage**: 120+ global edge locations
- **Browser Support**: Modern browsers (ES6+)

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
Primary colors defined in CSS:
- Primary Blue: `#2563EB`
- Secondary Blue: `#3B82F6`
- Background: `#f8f9fa`

## 🚀 Deployment

### CDN Deployment (Current)
- **Repository**: GitHub - HenryAllen04/HelmguardWidget
- **CDN**: jsDelivr automatically syncs from `main` branch
- **URLs**: 
  - CSS: `https://cdn.jsdelivr.net/gh/HenryAllen04/HelmguardWidget@main/dist/helmguard-widget.css`
  - JS: `https://cdn.jsdelivr.net/gh/HenryAllen04/HelmguardWidget@main/dist/helmguard-widget.js`

### Alternative Hosting Options
- **Netlify**: Automatic deployments from Git
- **Vercel**: Optimized for React applications
- **GitHub Pages**: Free hosting for public repositories
- **AWS S3 + CloudFront**: Enterprise-grade distribution

## 🧪 Testing & Debugging

### Local Testing
```bash
npm start  # Development server at localhost:3000
```

### Widget Bundle Testing
1. `npm run build:widget`
2. Open `test-widget.html` in browser
3. Check browser console for errors

### Integration Testing
- **Webflow**: Project Settings → Custom Code → Head Code
- **WordPress**: Theme header.php or plugin
- **Static Sites**: Before closing `</head>` tag

### Troubleshooting
- **Widget not appearing**: Check browser console for errors
- **Slow loading**: Verify CDN URLs are accessible
- **Mobile issues**: Test responsive design on various devices

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Make changes and test thoroughly
4. Commit: `git commit -m "feat: your feature description"`
5. Push and submit a pull request

### Development Commands
```bash
npm start              # Development server
npm run build         # Production build
npm run build:widget  # Widget bundle only
npm test             # Run tests
```

## 📝 License

MIT License - see LICENSE file for details.

## 🆘 Support

- **Issues**: GitHub Issues page
- **Documentation**: This README + `WEBFLOW_EMBED_GUIDE.md`
- **Contact**: [HelmGuard Support](https://helmguard.ai/contact)