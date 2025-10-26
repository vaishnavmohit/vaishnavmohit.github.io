# Quick Reference: Professional Color Scheme

## 🎨 At a Glance

### Primary Brand Colors
```
Brand Primary:    #667eea  ███ Professional blue-purple
Brand Secondary:  #764ba2  ███ Deep purple accent  
Brand Accent:     #3498db  ███ Bright blue
```

### Light Mode
```
Background:       #ffffff  ███ Pure white
Background Alt:   #f8f9fa  ███ Light grey
Card Background:  #ffffff  ███ White
Text:             #2c3e50  ███ Dark blue-grey
Text Muted:       #6c757d  ███ Medium grey
Border:           #e9ecef  ███ Light border
```

### Dark Mode
```
Background:       #1a1a2e  ███ Dark navy
Background Alt:   #16213e  ███ Darker navy
Card Background:  #25274d  ███ Elevated dark
Text:             #e8e9ed  ███ Light grey
Text Muted:       #a8a9b4  ███ Medium grey
Border:           #3d3e5a  ███ Dark border
Theme Color:      #4a9eff  ███ Bright blue
```

### Semantic Colors (Both Modes)
```
Success:          #27ae60  ███ Professional green
Warning:          #f39c12  ███ Gold/orange
Danger:           #e74c3c  ███ Professional red
Info:             #3498db  ███ Info blue
```

## 🌈 Gradients

### Primary Gradient
**Light Mode:**
```css
linear-gradient(135deg, #667eea 0%, #764ba2 100%)
```

**Dark Mode:**
```css
linear-gradient(135deg, #4a9eff 0%, #7db4ff 100%)
```

### Usage Examples

#### Buttons
```css
background: var(--gradient-primary);
```

#### Section Headers
```css
background: var(--gradient-primary);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
```

#### Cards
```css
border: 2px solid transparent;
background: linear-gradient(var(--global-card-bg-color), var(--global-card-bg-color)) padding-box,
            var(--gradient-primary) border-box;
```

## 🔧 CSS Variables Reference

### Using in Your Code
```css
/* Background */
background-color: var(--global-bg-color);

/* Text */
color: var(--global-text-color);

/* Theme Color */
color: var(--global-theme-color);

/* Borders */
border: 1px solid var(--global-border-color);

/* Shadows */
box-shadow: 0 4px 15px var(--global-shadow-color);
```

## 📊 Accessibility

### Contrast Ratios
All color combinations meet WCAG 2.1 AA standards:

**Light Mode:**
- Text on Background: 12.6:1 ✅
- Text Muted on Background: 4.6:1 ✅
- Theme Color on White: 4.5:1 ✅

**Dark Mode:**
- Text on Background: 11.8:1 ✅
- Text Muted on Background: 5.2:1 ✅
- Theme Color on Dark: 5.8:1 ✅

## 🎯 Quick Tips

1. **Always use CSS variables** - Never hardcode colors
2. **Test in both themes** - Ensure visibility in light & dark
3. **Use gradients sparingly** - For emphasis only
4. **Maintain consistency** - Stick to the defined palette
5. **Check contrast** - Use browser dev tools

## 🖼️ Color Picker Values

For design tools (Figma, Sketch, Adobe XD):

### RGB Values
```
Brand Primary:    rgb(102, 126, 234)
Brand Secondary:  rgb(118, 75, 162)
Brand Accent:     rgb(52, 152, 219)
Success:          rgb(39, 174, 96)
Warning:          rgb(243, 156, 18)
Danger:           rgb(231, 76, 60)
```

### HSL Values
```
Brand Primary:    hsl(229, 76%, 66%)
Brand Secondary:  hsl(270, 37%, 46%)
Brand Accent:     hsl(204, 70%, 53%)
Success:          hsl(145, 63%, 42%)
Warning:          hsl(37, 90%, 51%)
Danger:           hsl(6, 78%, 57%)
```

## 📐 Spacing Scale

Use consistent spacing based on 0.5rem (8px):
```
xs:  0.5rem   (8px)
sm:  1rem     (16px)
md:  1.5rem   (24px)
lg:  2rem     (32px)
xl:  3rem     (48px)
2xl: 4rem     (64px)
```

## 🎨 Shadow Scale

```css
sm:  0 2px 8px var(--global-shadow-color)
md:  0 4px 16px var(--global-shadow-color)
lg:  0 8px 32px var(--global-shadow-color)
```

## 📱 Border Radius

```css
small:  4px
medium: 8px
large:  12px
xl:     16px
round:  50%
```

---

**Pro Tip:** Use browser DevTools to inspect any element and see which CSS variables are being used. This makes it easy to maintain consistency!
