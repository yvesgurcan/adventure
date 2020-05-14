"Nice to meet you, <span id="name"></span>. I'm happy you came here. What brings you here?"

<form target="/about-you-thanks">
    <div class="centered" style="max-width: 600px; width: 100%">
        <textarea id="story" style="max-width: 100%; height: 400px;"></textarea>
        <br />
        <button type="submit">You tell him your story.</button>
    </div>
</form>

<script>
    const urlParams = new URLSearchParams(window.location.search);
    const name = urlParams.get('name'); const nameElement = document.getElementById("name"); nameElement.innerHTML = name;
</script>
