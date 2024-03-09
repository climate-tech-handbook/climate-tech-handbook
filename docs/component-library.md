---
title: Component Library
displayed_sidebar: docSidebar
---
import ImageCard from '../src/components/ImageCard/ImageCard';
import PodcastPagination from '/../src/components/PodcastPagination/PodcastPagination.jsx'; 

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

:::expert
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
  src="https://player.simplecast.com/48f461ac-a9c3-4c9e-8288-207b588d8a60?dark=true&wmode=opaque"
/>

<iframe allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write" frameBorder="0" height="175" style={{width:'100%', maxWidth:'660px', overflow:'hidden', borderRadius:'10px'}} sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation" src="https://player.simplecast.com/c0a97991-908c-49ab-a4d5-f2002f6b163b?dark=true&wmode=opaque" />

## YouTube embed

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/zFX1mOsg36w?si=H_P0WZ7XFclD1Nvg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

---

# Header 1

Paragraph Text

## Header 2

Paragraph Text

### Header 3

Paragraph Text

#### Header 4

Paragraph Text