
(function(l, r) { if (!l || l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (self.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(self.document);
(function () {
  'use strict';

  function getValues() {
    const items = [
      'item1',
      'item2',
      'item3',
      'item4',
      'item5',
      'item6',
      'item7',
      'item8',
      'item9',
      'item10',
      'item11',
      'item12',
      'item13',
      'item14',
    ];
    let listone = document.getElementById('list-one');
    for (const item of items) {
      let listItem = document.createElement('li');
      // @ts-ignore
      listone.appendChild(listItem);
      listItem.textContent = item;
      console.log(item);
    }
  }

  getValues();

})();
//# sourceMappingURL=bundle.js.map
