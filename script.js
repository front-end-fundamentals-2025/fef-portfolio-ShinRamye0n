const image = document.querySelector('.first-img');

/*add hover over image*/
image.addEventListener('mouseover', function() {
    /*color change on hover*/
  image.style.border = '5px solid #ff6347'; 
});

/*removing hover effect*/
image.addEventListener('mouseout', function() {
    /*border removal*/
  image.style.border = 'none'; 
});
