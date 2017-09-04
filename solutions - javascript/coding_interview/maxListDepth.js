// find the maximum depth of the nested ul/ol tags.

// For example:

// <ul>
//   <li>Item:
//      <ol>
//        <li>Point:
//          <div>
//            <ul>
//              <li>elem1</li>
//            </ul>
//          </div>
//        </li>
//      </ol>
//   </li>
//   <li>elem2</li>
// </ul>
// <ul>
//   <li>simple list1</li>
// </ul>
// <ul>
// </ul>

// The depth would be 3

// and for:

// <ol>
//   <li>
//     <ol>
//       <li></li>
//     </ol>
//   </li>
// </ol>

// The depth would be 2

// If there are no ul or ol in the DOM then the depth is 0

let tempDepth,
  maxDepth = 0;

$('li:not(:has(ol)):not(:has(ul))').each(function() {
  tempDepth = $(this).parents('ul,ol').length;
  if (tempDepth > maxDepth) {
    maxDepth = tempDepth;
  }
});

console.log('Depth : ', tempDepth);
