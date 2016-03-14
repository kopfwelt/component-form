# Form component

If you want your form to have a working validation this component might work for you.

## How to use

1) Install the component using NPM

```
npm install --save kopfwelt/component-form
```

2) Import the SCSS mixins and apply them

```scss
@import 'node_modules/kopfwelt/component-ratio/component-ratio-mixin';

input {
	@include validate-border;
}
```

3) Use it

```markup
input {
	@include validate-border;
}
label {
	@include validate-text;
}
label a {
	@include validate-link;
}
```
