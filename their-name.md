
"Pleased to meet you, <span id="name"></span>. My name is Yves."

- ["What?"](name-details.md)
- ["Enchanté."](french.md)

<script>
const urlParams = new URLSearchParams(window.location.search);
const name = urlParams.get('name');
const nameElement = document.getElementById("name");
nameElement.innerHTML = name;
</script>
