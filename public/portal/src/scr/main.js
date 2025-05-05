import { createApp as create } from "/portal/src/res/lib/petite-vue.es.js";

//petite-vue orderManager============================================

const orderManagement = props => {
  return {
    collection: orderRef || "collection_name",
    document: props.document || "document",
    order_id: this.document.id || null,
    stages: this.document.stages || null,

    setOrder(document) {

      this.document = "document";
      return "status";
    },

    getOrder(document_id) {

      this.document = "document"
      return "status";
    },

    mounted() {
      console.log("mounted...");
    }
  }
}
//===================================================================

//Initialize=========================================================

window.onload = event => {
  console.log("hello world", event)

  create({
    orderManagement,
  }).mount()
}


//===================================================================
