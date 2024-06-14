---
title: "JSON Editor"
date: 2024-01-19T19:14:44.600+08:00
summary: ""
tags: ["F2E"]
---

<div x-data="data()">
  <input type="file"
    x-on:change="await handleFiles($event.target.files[0])"
  />
  <div>
  <span x-text="content"></span>
  <span x-text="Object.keys(JSONData).length"></span>
  <button
    type="button"
    class="mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
    x-show="Object.keys(JSONData).length > 0"
    x-on:click="download(JSON.stringify(JSONData), 'download.json', 'application/json')"
  >
    Download
  </button>
  </div>
  <input type="text" class="mx-auto w-full px-2 py-1 border"
    x-show="Object.keys(JSONData).length > 0"
    x-model="search"
  />
  <div class="w-full flex justify-center"
    x-show="Object.keys(JSONData).length > 0"
  >
    <input type="text" class="border-b-2 border-gray-300 py-2"
      x-model="title"
    />
    <input type="text" class="border-b-2 border-gray-300 py-2"
      x-model="episode"
    />
    <button type="button" class="text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline break-keep"
      x-on:click="addHandler()"
    >
      Add
    </button>
  </div>
  <!-- https://tailwindflex.com/@ip-leroy/table-for-user-management -->
  <table class="w-full text-md bg-white shadow-md rounded mb-4">
    <template x-for="(obj, index) in JSONData" :key="index">
      <tr class="border-b hover:bg-orange-100 bg-gray-100"
        x-show="obj.title.includes(search)"
      >
        <td class="p-2">
          <span class="break-keep" x-text="index"></span>
        </td>
        <td class="p-3 px-5">
          <input type="text" class="w-full bg-transparent border-b-2 border-gray-300 py-2"
            x-model="obj.title"
          />
        </td>
        <td class="p-2">
          <input type="text" class="w-full bg-transparent border-b-2 border-gray-300 py-2"
            x-model="obj.episode"
          />
        </td>
        <td class="p-3 px-5">
          <button type="button" class="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline break-keep"
            x-on:click="deleteHandler(index)"
          >
            Delete
          </button>
        </td>
      </tr>
    </template>
  </table>
</div>

<script>
  // https://stackoverflow.com/questions/63233506/refreshing-data-after-the-fact-in-alpinejs
  function data() {
    return {
      content: '',
      JSONData: {},
      search: '',
      title: '',
      episode: '',

      async handleFiles(file) {
        this.content = file.name;
        // load file
        if (validateFileType(file.type)) {
          let reader = new FileReader();
          reader.readAsText(file);
          // https://open-code.tech/en/post-1424/
          await new Promise(resolve => reader.onload = (event) => {
            this.JSONData = JSON.parse(event.target.result);
            resolve();
          })
        }
      },
      // https://codepen.io/aggressivetea/details/OJbgZMj
      // https://stackoverflow.com/questions/44025984/how-to-filter-an-object-by-its-values-in-es6
      // async filteredData() {
      //   if (Object.keys(this.JSONData).length) {
      //     const filteredEntries = Object.entries(this.JSONData).filter(([, v]) => this.search.includes(v));
      //     return Object.fromEntries(filteredEntries);
      //   } else {
      //     return {};
      //   }
      // },
      deleteHandler(index) {
        delete this.JSONData[index];
        this.refreshData();
      },
      addHandler() {
        if (!isNaN(Number(this.episode))) {
          let newKey = Object.keys(this.JSONData).length + 1;
          let newData = { title: this.title, episode: Number(this.episode) };
          this.JSONData[newKey] = newData;
          this.title = '';
          this.episode = '';
        }
      },
      refreshData() {
        // https://stackoverflow.com/questions/4647817/javascript-object-rename-key
        let length = Object.keys(this.JSONData).length;
        let arr = Object.entries(this.JSONData);
        for (let i=0; i<length; i++) {
          arr[i][0] = i+1;
        }
        this.JSONData = Object.fromEntries(arr);
      }
    }
  }

  function validateFileType(inputFileType) {
    console.log('validateFileType()');
    let allowedType = ['application/json'];
      if (!allowedType.includes(inputFileType)) return false;
      return true;
  }

  function download(data, filename, type) {
    // https://stackoverflow.com/questions/13405129/create-and-save-a-file-with-javascript
    let file = new Blob([data], {type: type});

    let a = document.createElement("a");
    let url = URL.createObjectURL(file);
    a.href = url;
    a.download = filename;

    a.click();

    setTimeout(() => {
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
    }, 0);
  }
</script>
