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
  src="https://embed.podcasts.apple.com/us/podcast/how-to-accelerate-rooftop-solar-household-batteries/id1548554104?i=1000628024034"
/>

---

# Header 1

Paragraph Text

## Header 2

Paragraph Text

### Header 3

Paragraph Text

#### Header 4

Paragraph Text