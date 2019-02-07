# Things I've Learned About CSS Grid Layout

CSS Grid you can create complex web designs. It is very intuitive and very well supported by the major browsers. In this article I will show how to build layouts in CSS Grids.


## Setting Up CSS Grid

It is very simple to get CSS Grid up and running. First of all I would recommend to download Firefox's Developer Edition. Firefox has some great Dev Tools included, which makes it very easy to examine the CSS grid.

Here is the markup for a container (parent) with six items (children) in it:

### HTML

```
<div class="container">
    <div class="item item1">1</div>
    <div class="item item2">2</div>
    <div class="item item3">3</div>
    <div class="item item4">4</div>
    <div class="item item5">5</div>
    <div class="item item6">6</div>
</div>
 ```

To turn our container div into a grid, we give it a display of grid:

### CSS

```
.container {
    display: grid;
}
 ```

But, this doesn't do anything yet, as we haven't defined how we want our grid to look like. It'll position six div's on top of each other.

| ![Basic CSS Grid](/screenshots/basic-css-grid.png) |
|:--:|
| *Basic CSS Grid* |

## Defining Columns and Rows

To make it two-dimensional, we'll need to define the columns and rows. Let's create three columns and two rows. We'll use the ```grid-template-row``` and ```grid-template-column``` properties.

### CSS

```
.container {
    display: grid;
    grid-template-columns: 200px 200px 200px;
    grid-template-rows: 100px 100px;
}
 ```

| ![Basic CSS Grid with Columns and Rows](/screenshots/basic-css-grid-with-columns-and-rows.png) |
|:--:|
| *Basic CSS Grid with Columns and Rows* |



## Adding Grid-Gap Between Items

To set a gap between rows and columns you can use ```grid-column-gap``` and ```grid-row-gap``` or ```grid-gap```. The good thing is, that the gaps are only created between the items and not to the outside of the grid.

Let's add ```grid-gap``` to our example CSS:

```
.container {
    display: grid;
    grid-template-columns: 200px 200px 200px;
    grid-template-rows: 100px 100px;
    grid-gap: 20px;
}
 ```

| ![CSS Grid with 20px of Grid-Gap](/screenshots/css-grid-grid-gap.png) |
|:--:|
| *CSS Grid with 20px of Grid-Gap* |



I am using the ```grid-gap``` property to create a gap of 20px between my columns and rows. This property is a shorthand for ```grid-column-gap``` and ```grid-row-gap```.

## Explicit And Implicit Grid

Grid lines are dividing the grid on the horizontal and vertical axis. They start with number one. If you open the Grid Inspector Tools on Firefox, this becomes much clearer.

```
.container {
    display: grid;
    grid-gap: 20px;
    grid-template-columns: 200px 200px 200px;
    grid-template-rows: 100px 100px;
}
 ```

| ![CSS Grid with Numbered Column Lines and Row Lines](/screenshots/numbered-column-lines-and-row-lines.png) |
|:--:|
| *CSS Grid with Numbered Column Lines and Row Lines* |


| ![Firefox Developer Edition Inspector Tools](/screenshots/firefox-developer-edition-inspector.png) |
|:--:|
| *Firefox Developer Edition Inspector Tools* |


### Explicit

The explicit part uses the ```grid-template-columns``` and ```grid-template-rows``` properties. Here you specify how many columns and rows the container has and how wide they should be.

| ![Explicit Grid with Closing Line at Bottom](/screenshots/explicit-grid-with-closing-line.png) |
|:--:|
| *Explicit Grid with Closing Line at Bottom* |


Check the continuous line "closing" the grid at the bottom, after the second row. This line encloses the explicit grid.
You can also use a shorthand to define rows and columns. The row track-listing coming before a forward slash, columns afterwards.

```
grid-template: 100px 100px / 200px 200px 200px;
 ```

### Implicit

The properties ```grid-auto-columns``` and ```grid-auto-rows``` define the implicit grid.

Let's give the rows a height of 50px and see what happens:

```
grid-auto-rows: 50px;
 ```

| ![CSS Grid with Implicit Grid](/screenshots/css-grid-with-implicit-grid.png) |
|:--:|
| *CSS Grid with Implicit Grid* |


Now all added lines will be 50px high.

The grid can only grow in one direction, so it adds either rows or columns. As a result, only one of the above properties is effective. The ```grid-auto-flow``` property specifies the direction of the implicit grid.

## The Repeat() Function

To avoid a lot of typing with columns that are all the same width, we will use the ```repeat()``` function. The first value in ```repeat()``` stands for the number of repetitions. Then the desired grid properties follow.

Here's an example for the ```repeat()``` function: 

### CSS

```
.container {
    display: grid;
    grid-gap: 20px;
    grid-template-columns: repeat(3, 200px);
    grid-template-rows: repeat(2, 100px);
}
 ```

Since we didn't change anything, the grid should still look exactly the same.

## Fractional Units

The ```fr``` unit works as one fraction of the available space. You can calculate flexible layouts without percentages, pixels or em.

Let's see how we can use this new flexible value in our code:

### CSS

```
.container {
    display: grid;
    grid-gap: 20px;
    grid-template-columns: repeat(3, 1fr);
}
 ```

For three columns with an equal width, we can use fractional units now, instead of setting a ```width:calc(100%/3)``` on the item.

This way, you can add as many child elements as possible, while the widths stays the same on all child elements.

| ![CSS Grid using Fractional Units](/screenshots/css-grid-using-fractional-units.png) |
|:--:|
| *CSS Grid using Fractional Units* |

Since I didn't set a fixed width, the elements now take up as much space as possible.

### Combine fr with other CSS units

You can also combine the ```fr``` unit with any other CSS units of course. For instance, in the example below, I used the ```60% 1fr 2fr``` ratio for my grid.

### CSS

```
.container {
    display: grid;
    grid-gap: 20px;
    grid-template-columns: 60% 1fr 2fr;
}
 ```

| ![CSS Grid with the Ratio of 60% 1fr 2fr](/screenshots/css-grid-with-ratio.png) |
|:--:|
| *CSS Grid with the Ratio of 60% 1fr 2fr* |

## Sizing Individual Grid Items

Let's see how to determine the width of an item inside the grid container with the ```span``` keyword. I am going to span item #5 across three column tracks. All the items from item #6 onwards have skipped one spot to the next available cell.

### HTML

```
.container {
    display: grid;
    grid-template-columns: repeat(3, 200px);
    grid-template-rows: repeat(2, 100px);
}
 ```

### CSS

```
.item5 {
    grid-column: 1 / span 3;
    background: #CAC4CE;
}
 ```

| ![CSS Grid Spanning Item Five across Three Columns](/screenshots/spanning-item-five-across-three-columns.png) |
|:--:|
| *CSS Grid Spanning Item Five across Three Columns* |


## The Grid-Auto-Flow Property

If you change grid elements, gaps may occur in the grid, as you can see in the previous example.

With the ```grid-auto-flow``` property you can control the auto-placement algorithm. Items that run outside the defined grid tracks, will show in generated rows. That is, unless we set ```grid-auto-flow``` to column.

```
grid-auto-flow: column;
```


The ```dense``` keyword will place smaller items in the gaps and fill the grid as good as possible. I have added another item #7.

### CSS

```
.container {
    display: grid;
    grid-auto-flow: dense;
    grid-template-columns: repeat(3, 200px);
    grid-template-rows: repeat(2, 100px);
}
```

| ![CSS Grid with Grid-Auto-Flow: Dense](/screenshots/grid-auto-flow-dense.png) |
|:--:|
| *CSS Grid with Grid-Auto-Flow: Dense* |

## The Span Keyword

You can also tell the grid item1 from our previous example how wide you want it to span and where you want it to end. You can use the ```grid-template-column``` keyword to avoid specifying end lines when items should span more than one column or row.

### HTML

```
.container {
    display: grid;
    grid-template-columns: repeat(3, 200px);
    grid-template-rows: repeat(2, 100px);
}
```

### CSS

```
.item1 {
    background: #D7CDCC;
    grid-column: 1 / 4;
    grid-row: 1 / 3;
}
```

| ![CSS Grid with Grid-Column Shorthand Property](/screenshots/grid-column-shorthand-property.png) |
|:--:|
| *CSS Grid with Grid-Column Shorthand Property* |

If you want your item to span the entire width of the grid, but don't know how wide your grid is, you can set ```grid-column:1/-1```.

## Positioning Items in the Grid

With CSS grids you can position the elements in the grid as you like. You can move the child elements with four CSS properties: ```grid-row-start```, ```grid-row-start```, ```grid-column-start``` or ```grid-column-end```. Remember, the positioning is not done by grid columns, but by column lines.

### CSS

```
.item1 {
    background: #D7CDCC;
    grid-column-start: 1;
    grid-column-end: 4;
}
 ```

| ![CSS Grid using Grid-Column-Start and Grid-Column-End](/screenshots/grid-column-start-and-grid-column-end.png) |
|:--:|
| *CSS Grid using Grid-Column-Start and Grid-Column-End* |

And there is a simpler way of writing the syntax above:

### CSS

```
.item1 {
    background: #D7CDCC;
    grid-column: 1 / 4;
}
 ```

## The Minmax() Function

If you set a fixed size for the items, a smaller viewport pushes the content together too much.
The ```minmax()``` property makes it possible to adapt the grid to the respective viewport of each user.

Feel free to check out the behavior of ```minmax()``` on different devices:

### CSS

```
.container {
    border:1px solid #1D1E2C;
    display: grid;
    grid-gap: 20px;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    padding: 5px;
}
 ```

## Auto-Fill vs. Auto-Fit

When to use ```auto-fill``` and when ```auto-fit``` can be a bit confusing, but it makes a lot more sense when you visualize it.

```Auto-fill```- Fills the row with as many columns as it can fit.

```
.container {
    border:1px solid #1D1E2C;
    display: grid;
    grid-gap: 20px;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    padding: 5px;
}
 ```

| ![CSS Grid using Auto-Fill Keyword for Repeat](/screenshots/auto-fill-keyword.png) |
|:--:|
| *CSS Grid using Auto-Fill Keyword for Repeat* |

```Auto-fit```- Columns take up any available space.

### CSS

```
.container {
    border:1px solid #1D1E2C;
    display: grid;
    grid-gap: 20px;
    grid-template-columns: repeat(auto-fit, minmax(200px,1fr));
    padding: 5px;
}
 ```

| ![CSS Grid using Auto-Fit Keyword for Repeat](/screenshots/auto-fit-keyword.png) |
|:--:|
| *CSS Grid using Auto-Fit Keyword for Repeat* |

## Six Properties for Justification and Alignment

With ```justify-items``` you can justify the grid items along the row axis. With ```align-items``` you can align the grid items along the column axis.

### Justify-Content

```
.container {
    border: solid 1px #1D1E2C;
    display: grid;
    grid-gap: 20px;
    grid-template-columns: repeat(3, 200px);
    justify-content: ***;
}
 ```
| ![CSS Grid with Justify-Content and Start](/screenshots/justify-content-start.png) |
|:--:|
| *CSS Grid with Justify-Content and Start* |

| ![CSS Grid with Justify-Content and Center](/screenshots/justify-content-center.png) |
|:--:|
| *CSS Grid with Justify-Content and Center* |

| ![CSS Grid with Justify-Content and Space-Around](/screenshots/justify-content-space-around.png) |
|:--:|
| *CSS Grid with Justify-Content and Space-Around* |

| ![CSS Grid with Justify-Content and Space-Between](/screenshots/justify-content-space-between.png) |
|:--:|
| *CSS Grid with Justify-Content and Space-Between* |


### Align-Content

Give the container a fixed height of 500px and the items will stretch over the whole height.

```
.container {
    border: solid 1px #1D1E2C;
    display: grid;
    grid-gap: 20px;
    grid-template-columns: repeat(3, 200px);
    height: 500px;
    justify-content: space-around;
}
 ```

| ![CSS Grid with a Fixed Height of 500px](/screenshots/css-grid-fixed-height.png) |
|:--:|
| *CSS Grid with a Fixed Height of 500px* |


```
container {
    align-content: space-around;
    border: solid 1px #1D1E2C;
    display: grid;
    grid-gap: 20px;
    grid-template-columns: repeat(3, 200px);
    height: 500px;
    justify-content: space-around;
}
 ```

| ![CSS Grid with Align-Content Space-Around](/screenshots/align-content-space-around.png) |
|:--:|
| *CSS Grid with Align-Content Space-Around* |

### HTML

```
.container {
    align-content:space-around;
    border: solid 1px #1D1E2C;
    display: grid;
    grid-gap: 20px;
    grid-template-columns: repeat(3, 200px);
    height: 500px;
    justify-content: space-around;
}
 ```

### CSS

```
.item1{
    align-self: center;
    background: #D7CDCC;
    justify-self: center;
    width: 50px;
}
 ```

| ![CSS Grid with ### - Self on the Item Itself](/screenshots/self-on-the-item-itself.png) |
|:--:|
| *CSS Grid with *** - Self on the Item Itself* |

Here is the short version for ```justify-***``` and ```align-***```:

```
place-items: center center;
 ```

---

## Further Reading

* **Rachel Andrew** [Grid by Example](https://gridbyexample.com/) - Here you can learn everything about CSS Grid Layout.

* **Jen Simmons** [Learn CSS Grid](http://jensimmons.com/) - I follow Layout Land on Youtube for quite a while now.

* **Wes Bos** [CSS Grid Tutorial](https://cssgrid.io/) - It was my first Wes Bos Course and I found it very helpful and inspiring.

* **CSS Tricks'** [Complete Guide to CSS Grid](https://css-tricks.com/snippets/css/complete-guide-grid/) - I found it very good to clarify a few definitions. They also offer some great illustrative examples.


---