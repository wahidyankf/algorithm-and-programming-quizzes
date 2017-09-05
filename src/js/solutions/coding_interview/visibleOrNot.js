// Example test:    '<!DOCTYPE html>\n<html><head><title>Codility test</title></head><body>\n    <table>\n        <tbody>\n        <tr>\n            <td style="color: #ff00ff; background-color:#FFFFFF">Q</TD>\n            <td style="background-color: #442244; color: #442244">Y</td>\n            <td style="color: #FFFF00; background-color:#442244">A</td>\n        </tr>\n        <tr>\n            <td style="color: #FFEEFE; background-color:#990000">Q</td>\n            <td style="color: #FFFF00; background-color:#FF0">M</td>\n            <td style="color: #000000; background-color:#FF7777">O</td>\n        </tr>\n        </tbody>\n    </table>\n</body></html>'
// OK

function solution() {
  // write your code in Javascript
  //
  // you can access DOM Tree using DOM Object Model:
  //    document.getElementsByTagName
  // or using jQuery:
  //    $('some_tag')
  //
  // please note that element.innerText is not supported,
  // you can use element.textContent instead.
  let visible = [];
  let $td = $('td');

  $td.each(function() {
    let cellText = this.innerHTML;
    let cellColor = this.style.color;
    let cellBackgroundColor = this.style.backgroundColor;

    if (cellColor !== cellBackgroundColor) {
      visible.push(cellText);
    }
  });

  return visible.join('');
}

solution();
