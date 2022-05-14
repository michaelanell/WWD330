const input = form.elements.searchInput;

input.addEventListener('focus', () => alert('focused'), false);
input.addEventListener('change', () => alert('changed'), false);
