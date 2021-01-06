---
title: "CSS Tailwindcss"
date: 2019-12-06T13:19:59.000Z
published: 2019-12-06T13:19:59.000Z
author: f6bfb5
summary:
layout: blog
---

## Installation

- [Document](https://tailwindcss.com/docs/installation)

### 1. Install Tailwind via npm

`npm install tailwindcss`
`yarn add tailwindcss`

### 2. Add Tailwind to CSS

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

or

```js
@import "tailwindcss/base;
@import "tailwindcss/componeonts;
@import "tailwindcss/utilities;
```

### via CDN

`<link href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css" rel="stylesheet">`

## Layout

### Container

`.container`

### Display

`.block`
`.inline-block`
`.inline`
`.flex`
`.inline-flex`
`.table`
`.table-row`
`.table-cell`
`.hidden`

### Floats

`.float-right`
`.float-left`
`.float-none`
`.clearfix`

### Object Fit

`.object-contain`
`.object-cover`
`.object-fill`
`.object-none`
`.object-scale-down`

### Object Position

`.object-bottom`
`.object-center`
`.object-left`
`.object-left-bottom`
`.object-left-top`
`.object-right`
`.object-right-bottom`
`.object-right-top`
`.object-top`

### Overflow

`.overflow-auto`
`.overflow-hidden`
`.overflow-visible`
`.overflow-scroll`
`.overflow-x-auto`
`.overflow-y-auto`
`.overflow-x-hidden`
`.overflow-y-hidden`
`.overflow-x-visible`
`.overflow-y-visible`
`.overflow-x-scroll`
`.overflow-y-scroll`
`.scrolling-touch`
`.scrolling-auto`

### Position

`.static`
`.fixed`
`.absolute`
`.relative`
`.sticky`

### Top / Right / Bottom / Left

`.inset-0`
`.inset-y-0`
`.inset-x-0`
`.top-0`
`.right-0`
`.bottom-0`
`.left-0`
`.inset-auto`
`.inset-y-auto`
`.inset-x-auto`
`.top-auto`
`.bottom-auto`
`.left-auto`
`.right-auto`

### Visibility

`.visible`
`.invisible`

### Z-index

`.z-0`
`.z-10`
`.z-20`
`.z-30`
`.z-40`
`.z-50`
`.z-auto`

## Typography

### Font Family

`.font-sans`
`.font-serif`
`.font-mono`

### Font Size

`.text-xs`
`.text-sm`
`.text-base`
`.text-lg`
`.text-xl`
`.text-2xl`
`.text-3xl`
`.text-4xl`
`.text-5xl`
`.text-6xl`

### Font Sommthing

`.antialiased`
`.subpixel-antialiased`

### Font Style

`.italic`
`.not-italic`

### Font Weight

`.font-hairline`
`.font-thin`
`.font-light`
`.font-normal`
`.font-medium`
`.font-semibold`
`.font-bold`
`.font-extrabold`
`.font-black`

### Letter Spacing

`.tracking-tighter`
`.tracking-tight`
`.tracking-normal`
`.tracking-wide`
`.tracking-wider`
`.tracking-widest`

### Line Height

`.leading-none`
`.leading-tight`
`.leading-sung`
`.leading-normal`
`.leading-relaxed`
`.leading-loose`

### List Style Type

`.list-none`
`.list-disc`
`.list-decimal`

### List Style Position

`.list-inside`
`.list-outside`

### Placeholder Color

`.placeholder-transparent`
`.placeholder-black`
`.placeholder-white`
`.placeholder-[gray/red/orange/yellow/green/teal/blue/indigo/purple/pink]-[100-900]`

### Text Alignment

`.text-left`
`.text-center`
`.text-right`
`.text-justify`

### Text Color

`.text-transparent`
`.text-black`
`.text-white`
`.text-[gray/red/orange/yellow/green/teal/blue/indigo/purple/pink]-[100-900]`

### Text Decoration

`.underline`
`.line-through`
`.no-underline`

### Text Transform

`.uppercase`
`.lowercase`
`.capitalize`
`.normal-case`

### Vertical Alignment

`.align-baseline`
`.align-top`
`.align-middle`
`.align-bottom`
`.align-text-top`
`.align-text-bottom`

### Whitespace

`.whitespace-normal`
`.whitespace-no-wrap`
`.whitespace-pre`
`.whitespace-pre-line`
`.whitespace-pre-wrap`

### Word Break

`.break-normal`
`.break-words`
`.break-all`
`.truncate`

## Backgrounds

### Background Attachment

`.bg-fixed`
`.bg-local`
`.bg-scroll`

### Background Color

`.bg-transparent`
`.bg-black`
`.bg-white`
`.bg-[gray/red/orange/yellow/green/teal/blue/indigo/purple/pink]-[100-900]`

### Background Position

`.bg-bottom`
`.bg-center`
`.bg-left`
`.bg-left-bottom`
`.bg-left-top`
`.bg-right`
`.bg-right-bottom`
`.bg-right-top`
`.bg-top`

### Background Repeat

`.bg-repeat`
`.bg-no-repeat`
`.bg-repeat-x`
`.bg-repeat-y`
`.bg-repeat-round`
`.bg-repeat-space`

### Background Size

`.bg-auto`
`.bg-cover`
`.bg-contain`

## Borders

### Border Color

`.border-transparent`
`.border-black`
`.border-white`
`.border-[gray/red/orange/yellow/green/teal/blue/indigo/purple/pink]-[100-900]`

### Border Style

`.border-solid`
`.border-dashed`
`.border-dotted`
`.border-double`
`.border-none`

### Border Width

`.border`
`.border-2`
`.border-4`
`.border-8`
`.border-t`
`.border-r`
`.border-b`
`.border-l`
`.border-{side}-{2/4/6/8}`

### Border Radius

`.rounded-none`
`.rounded-sm`
`.rounded`
`.rounded-lg`
`.rounded-full`
`.rounded-t`
`.rounded-r`
`.rounded-b`
`.rounded-l`
`.rounded-tl`
`.rounded-tr`
`.rounded-br`
`.rounded-bl`
`.rounded-{t|r|b|l}{-size?}`
`.rounded-{tl|tr|br|bl}{-size?}`

## Flexbox

### Flex Direction

`.flex-row`
`.flex-row-reverse`
`.flex-col`
`.flex-col-reverse`

### Flex Wrap

`.flex-no-wrap`
`.flex-wrap`
`.flex-wrap-reverse`

### Align Items

`.items-stretch`
`.items-start`
`.items-center`
`.items-end`
`.items-baseline`

### Align Content

`.content-start`
`.content-center`
`.content-end`
`.content-between`
`.content-around`

### Align Self

`.self-auto`
`.self-start`
`.self-center`
`.self-end`
`.self-stretch`

### Justify Content

`.justify-start`
`.justify-center`
`.justify-end`
`.justify-between`
`.justify-around`

### Flex

`.flex-initial`
`.flex-1`
`.flex-auto`
`.flex-none`

### Flex Grow

`.flex-grow`
`.flex-grow-0`

### Flex Shrink

`.flex-shrink`
`.flex-shrink-0`

### Order

`.order-first`
`.order-last`
`.order-none`
`.order-{1-12}`

## Spacing

### Padding

`.p-{0-6|8|10|12|16|20|24|32|40|48|56|64|px}`
`.py-{0-6|8|10|12|16|20|24|32|40|48|56|64|px}`
`.px-{0-6|8|10|12|16|20|24|32|40|48|56|64|px}`
`.pt-{0-6|8|10|12|16|20|24|32|40|48|56|64|px}`
`.pr-{0-6|8|10|12|16|20|24|32|40|48|56|64|px}`
`.pb-{0-6|8|10|12|16|20|24|32|40|48|56|64|px}`
`.pl-{0-6|8|10|12|16|20|24|32|40|48|56|64|px}`

### Margin

`.m-{0-6|8|10|12|16|20|24|32|40|48|56|64|auto|px}`
`.-m-{0-6|8|10|12|16|20|24|32|40|48|56|64|auto|px}`
`.my-{0-6|8|10|12|16|20|24|32|40|48|56|64|auto|px}`
`.-my-{0-6|8|10|12|16|20|24|32|40|48|56|64|auto|px}`
`.mx-{0-6|8|10|12|16|20|24|32|40|48|56|64|auto|px}`
`.-mx-{0-6|8|10|12|16|20|24|32|40|48|56|64|auto|px}`
`.mt-{0-6|8|10|12|16|20|24|32|40|48|56|64|auto|px}`
`.-mt-{0-6|8|10|12|16|20|24|32|40|48|56|64|auto|px}`
`.mr-{0-6|8|10|12|16|20|24|32|40|48|56|64|auto|px}`
`.-mr-{0-6|8|10|12|16|20|24|32|40|48|56|64|auto|px}`
`.mb-{0-6|8|10|12|16|20|24|32|40|48|56|64|auto|px}`
`.-mb-{0-6|8|10|12|16|20|24|32|40|48|56|64|auto|px}`
`.ml-{0-6|8|10|12|16|20|24|32|40|48|56|64|auto|px}`
`.-ml-{0-6|8|10|12|16|20|24|32|40|48|56|64|auto|px}`

## Sizing

### Width

`.w-{0-6|8|10|12|16|20|24|32|40|48|56|64|auto|px}`
`.w-{1/2|{1-2}/3|{1-3}/4|{1-4}/5|{1-5}/6}`
`.w-{1-11}/12`
`.w-full`
`.w-screen`

### Min-Width

`.min-w-0`
`.min-w-full`

### Max-Width

`.max-w-{xs|sm|md|lg|xl|{2-6}xl|full}`

### Height

`.h-{0-6|8|10|12|16|20|24|32|40|48|56|64|auto|px}`
`.h-full`
`.h-screen`

### Min-Height

`.min-h-0`
`.min-h-full`
`.min-h-screen`

### Max-Height

`.max-h-full`
`.max-h-screen`

## Tables

### Border Collapse

`.border-collapse`
`.border-separate`

### Table Layout

`.table-auto`
`.table-fixed`

## Effects

### Box Shadow

`.shadow`
`.shadow-{md|lg|xl|2xl|inner|outline|none}`

### Opacity

`.opaticy-{100|75|50|25|0}`

## Interactivity

### Appearance

`.appearance-none`

### Cursor

`.cursor-{auto|default|pointer|wait|text|move|not-allowed}`

### Outline

`.outline-none`

### Pointer Events

`.pointer-events-none`
`.pointer-events-auto`

### Resize

`.resize-none`
`.resize`
`.resize-{y|x}`

### User Select

`.select-{none|text|all|auto}`

## SVG

### Fill

`.fill-current`

### Stroke

`.stroke-current`

## Accessibility

### Screen Readers

`.sr-only`
`.not-sr-only`
