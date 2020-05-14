"Nice to meet you, <span id="name"></span>. I'm happy you came. Can you tell me more about yourself?"

<form target="/about-you-thanks">
    <div class="centered">
        <textarea id="story" style="width: 100%; max-width: 400px; height: 400px;"></textarea>
        <br />
        <button type="submit">You tell him your story.</button>
    </div>
</form>

<script>
    const urlParams = new URLSearchParams(window.location.search);
    const name = urlParams.get('name'); const nameElement = document.getElementById("name"); nameElement.innerHTML = name;
</script>
