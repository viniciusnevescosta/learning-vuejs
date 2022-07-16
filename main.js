const app = Vue.createApp({
  data() {
    return {
      h1: 'Lista de compras',
      p: 'Parece que você comprou todos os itens!',
      editing: false,
      items: [],
      item: '',
      itemHighPriority: '',
    }
  },
  // methods: usados para mudar data
  methods: {
    edit(edit) {
      this.editing = edit
      this.item = ''
      this.itemHighPriority = ''
    },
    addToItems() {
      this.items.push(
        {
          id: this.items.length + 1, 
          label: this.item, 
          priority: this.itemHighPriority
        })
      this.item = ''
      this.itemHighPriority = ''
    },
    completado(lista) {
      lista.purchased = !lista.purchased
    }
  },
  // computed: usado para mudar a apresentação da data
  computed: {
    reversedItems() {
      return [...this.items].reverse()
    }
  },
}).mount('#shopping-list')