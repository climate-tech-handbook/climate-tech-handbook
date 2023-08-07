---
title: Image card test
displayed_sidebar: docSidebar
---
import ImageCard from '../src/components/ImageCard/ImageCard';

Here is an example of using the `ImageCard` component:

## Section A

How can we get 3 cards to fit?

Can we widen the content display column or narrow the right side table of contents column?

<div style={{ display: 'flex', flexWrap: 'wrap'}}>

<ImageCard
  title="Example Title"
  description="Example description"
  imageUrl="/img/electricity.png"
  linkUrl="example.com"
/>

<ImageCard
  title="Example Title"
  description="Example description"
  imageUrl="/img/electricity.png"
  linkUrl="example.com"
/>

<ImageCard
  title="Example Title"
  description="Example description"
  imageUrl="/img/electricity.png"
  linkUrl="example.com"
/>

</div>


## Section B

More content

## Section C

More content

