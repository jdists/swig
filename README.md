# @jdists/swig

swig as jdists processor

[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage Status][coverage-image]][coverage-url]

* @see [jdists](https://github.com/zswang/jdists)

* @see [swig](https://github.com/paularmstrong/swig)

## Example

```html
<!--data>
kids:
  - name: Jimmy
    age: '12'
  - name: Sally
    age: '4'
</data-->

<!--jdists encoding="swig" data="?data"-->
<ul>
  {% for item in kids %}
  <li>{{ item.name }} is {{ item.age }}</li>
  {% endfor %}
</ul>
<!--/jdists-->

<!--swig data="?data"-->
<ul>
  {% for item in kids %}
  <li>{{ item.name }} is {{ item.age }}</li>
  {% endfor %}
</ul>
<!--/swig-->
```

## License

MIT © [zswang](http://weibo.com/zswang)

[npm-url]: https://badge.fury.io/js/%40jdists%2Fswig
[npm-image]: https://badge.fury.io/js/%40jdists%2Fswig.svg
[travis-url]: https://travis-ci.org/jdists/swig
[travis-image]: https://travis-ci.org/jdists/swig.svg?branch=master
[coverage-url]: https://coveralls.io/github/jdists/swig?branch=master
[coverage-image]: https://coveralls.io/repos/jdists/swig/badge.svg?branch=master&service=github