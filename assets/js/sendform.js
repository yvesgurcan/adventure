console.log(document.forms);
if (document.forms.length > 0) {
  document.forms[0].onsubmit = event => {
    console.log({ event });
  };
}
