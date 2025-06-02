# HelmGuard Widget - Webflow Embedding Guide

<!-- Purpose: Simple guide for embedding the HelmGuard Demo Widget into Webflow sites -->

## 🚀 Simple 2-Line Embed (Recommended)

Copy and paste these 2 lines into your Webflow site:

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/HenryAllen04/HelmguardWidget@main/dist/helmguard-widget.css">
<script src="https://cdn.jsdelivr.net/gh/HenryAllen04/HelmguardWidget@main/dist/helmguard-widget.js" data-auto-init="true"></script>
```

## 📋 Webflow Integration Steps

### Method 1: Site-wide Integration (Recommended)

1. **Open your Webflow project**
2. **Go to Project Settings** → **Custom Code**
3. **Paste the 2 lines in "Head Code" section**
4. **Publish your site**

The widget will automatically appear on all pages as a blue chat button in the bottom-right corner.

### Method 2: Page-specific Integration

1. **Select the specific page** in Webflow
2. **Go to Page Settings** → **Custom Code**
3. **Paste the 2 lines in "Before </body> tag" section**
4. **Publish your site**

### Method 3: Embed Block Integration

1. **Add an Embed component** to your page
2. **Paste the 2 lines** into the embed block
3. **Publish your site**

## 🎯 What Happens After Integration

- A **blue chat button** appears in the bottom-right corner
- Clicking it opens the **HelmGuard Demo Widget**
- Users can ask cybersecurity questions and get instant answers
- The widget is **fully responsive** and works on mobile

## 🔧 Customization Options

### Change Button Position
Add this CSS to move the widget button:

```html
<style>
.helmguard-widget-toggle {
  bottom: 20px !important;
  right: 20px !important;
  /* Or left: 20px !important; for left side */
}
</style>
```

### Hide on Specific Pages
Add this CSS to hide the widget on certain pages:

```html
<style>
.specific-page-class .helmguard-widget-toggle {
  display: none !important;
}
</style>
```

## 🌐 CDN Options

### Primary CDN (jsDelivr - Recommended)
```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/HenryAllen04/HelmguardWidget@main/dist/helmguard-widget.css">
<script src="https://cdn.jsdelivr.net/gh/HenryAllen04/HelmguardWidget@main/dist/helmguard-widget.js" data-auto-init="true"></script>
```

### Alternative CDN (unpkg)
```html
<link rel="stylesheet" href="https://unpkg.com/helmguard-widget@latest/dist/helmguard-widget.css">
<script src="https://unpkg.com/helmguard-widget@latest/dist/helmguard-widget.js" data-auto-init="true"></script>
```

### Self-hosted Option
If you prefer to host the files yourself:

1. Download `helmguard-widget.css` and `helmguard-widget.js` from the `/dist` folder
2. Upload them to your Webflow site's assets or external hosting
3. Update the URLs in the embed code

## 📱 Mobile Optimization

The widget is automatically optimized for mobile:
- **Responsive design** adapts to screen size
- **Touch-friendly** interface
- **Proper sizing** on all devices

## ⚡ Performance

- **Bundle size**: 243KB total (CSS + JS)
- **Load time**: <2 seconds
- **No dependencies** required
- **Cached by CDN** for fast loading

## 🛡️ Security & Privacy

- **No data collection** by the widget
- **Client-side processing** only
- **No external API calls** for Q&A matching
- **Safe for production** use

## 🧪 Testing

After embedding, test the widget by:

1. **Opening your live site**
2. **Clicking the blue chat button** (bottom-right)
3. **Asking test questions** like:
   - "What is your password policy?"
   - "How do you handle incident response?"
   - "What encryption standards do you use?"

## 🆘 Troubleshooting

### Widget Not Appearing
- Check that both CSS and JS lines are included
- Verify the URLs are accessible
- Check browser console for errors
- Ensure the site is published in Webflow

### Button Position Issues
- Add custom CSS to adjust positioning
- Check for conflicting styles in your site

### Mobile Display Problems
- The widget is responsive by default
- Check viewport meta tag is present
- Test on actual mobile devices

## 📞 Support

If you encounter issues:
- Check the [GitHub repository](https://github.com/HenryAllen04/HelmguardWidget)
- Review the full documentation in README.md
- Contact: support@helmguard.ai

## 🎯 Quick Copy-Paste

**For immediate use, copy this:**

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/HenryAllen04/HelmguardWidget@main/dist/helmguard-widget.css">
<script src="https://cdn.jsdelivr.net/gh/HenryAllen04/HelmguardWidget@main/dist/helmguard-widget.js" data-auto-init="true"></script>
```

That's it! Your HelmGuard widget is ready to go! 🚀 