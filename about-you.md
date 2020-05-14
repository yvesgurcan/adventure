"Nice to meet you, <span id="name"></span>," he says. "Sounds like a lovely name. Can you tell me more about yourself?"

- ["I would like to ask you some questions."](questions.md)
- ["Not much. Just wanted to say hi."](hi.md)
- ["Where are you from?"](french.md)
- [Leave.](leave.md)

<script>
const urlParams = new URLSearchParams(window.location.search);
const name = urlParams.get('name');
const nameElement = document.getElementById("name");
nameElement.innerHTML = name;
</script>
