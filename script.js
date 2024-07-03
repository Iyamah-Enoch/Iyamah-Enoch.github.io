const text = document.getElementById('text');

text.addEventListener('mouseover', function handleMouseOver() {
    text.style.color = 'gold';
});

text.addEventListener('mouseout', function handleMouseOut() {
    text.style.color = 'white';
});