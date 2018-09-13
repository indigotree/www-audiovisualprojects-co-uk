// Gallery
//
CMS.registerEditorComponent({
    id: "gallery",
    label: "Gallery",
    fields: [
        {
            name: 'id',
            label: 'Unique Id',
            widget: 'string'
        }
    ],
    pattern: /^{{< gallery id="(.*)" >}}$/,
    fromBlock: function(match) {
      return {
            id: match[1],
            content: match[2]
      };
    },
    toBlock: function(obj) {
        return '{{< gallery id="' + obj.id + '" >}}';
    },
    toPreview: function(obj) {
      return (
          '<div class="gallery">GALLERY: ' + obj.id + '</div>'
      );
    }
});