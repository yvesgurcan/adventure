
<div class="centered">
    <input id="name">
    <br />
    <button onclick="submit()">You say your name to the bearded man</button>
</div>



<script>
function submit() {
    const nameElement = document.getElementById('name');
    window.location.href = `/their-name?name=${nameElement.value}`;
}
</script>
