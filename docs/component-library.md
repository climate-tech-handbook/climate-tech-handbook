---
title: Component Library
displayed_sidebar: docSidebar
---

import ImageCard from '../src/components/ImageCard/ImageCard';

<a href="https://www.example.com" class="doc-button">Button</a>

## Admonitions

:::caution
Heavy work in progress
:::

:::info [Help us](contribute) track this Solution
:::

:::question
test
:::

:::podcast
test
:::

:::newsletter
test
:::

:::company
test
:::

:::contribute
test
:::

:::book
test
:::

### Detail box

<details>
  <summary><h3>Title here</h3></summary>
  <div>
    <div>
      <h2>Header</h2>
      <p>Paragraph</p>
    </div>
  </div>
</details>

## Image Cards

<div style={{ display: 'flex', flexWrap: 'wrap'}}>
    <ImageCard
    title="Image card example"
    description="Image card description. Note character limit has elipses cutoff"
    imageUrl="/img/recycled-plastics.png"
    linkUrl="../solution-recycled-plastics"
    />
    <ImageCard
    title="Image card example"
    description="Transforming discarded plastics into useful products, reducing plastic waste and its impact on the environment."
    imageUrl="/img/recycled-plastics.png"
    linkUrl="../solution-recycled-plastics"
    />
</div>

## Podcast embed

<iframe 
  allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write" 
  frameBorder="0" 
  height="175" 
  style={{width:'100%', maxWidth:'660px', overflow:'hidden', borderRadius:'10px'}} 
  sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation" 
  src="https://podcasts.apple.com/us/podcast/what-do-you-do-with-a-100-hour-battery/id1593204897?i=1000638538550&uo=4"
/>

<iframe 
    id="embedPlayer" 
    src="https://embed.podcasts.apple.com/us/podcast/the-future-of-natural-gas/id1593204897?i=1000544414574&itsct=podcast_box_player&itscg=30200&ls=1&theme=auto" 
    height="175px" 
    frameBorder="0" 
    sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation-by-user-activation" 
    allow="autoplay *; encrypted-media *; clipboard-write" 
    style={{ 
        width: '100%', 
        maxWidth: '660px', 
        overflow: 'hidden', 
        borderRadius: '10px', 
        transform: 'translateZ(0px)', 
        animation: '2s ease 0s 6 normal none running loadingIndicator', 
        backgroundColor: 'rgb(228, 228, 228)' 
    }}
></iframe>

---

# Header 1

Paragraph Text

## Header 2

Paragraph Text

### Header 3

Paragraph Text

#### Header 4

Paragraph Text

