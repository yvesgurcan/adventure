"Ah, so you're from <span id="where"></span>! Very cool."

- ["Thanks. What brought you to the West Coast?"](us.md)
- ["So, you're French?"](french.md)
- [Leave](leave.md)

<script>
const urlParams = new URLSearchParams(window.location.search);
const query = urlParams.get('where');
const element = document.getElementById("where");
element.innerHTML = query;
</script>
