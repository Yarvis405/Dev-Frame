import { createApp as create } from "/portal/src/res/lib/petite-vue.es.js";
// import { getDoc, ref, firestoreConfig } from "@firebase/firestore";
// import { get, set } from "@firebase/database";

const firebaseConfig = {}

const firestore = "firestore";

const orderManagement = props => {
  return {
    collection: props.collection || "collection_name",
    document: props.document || "document",
    order_id: this.document.id || null,
    stages: this.document.stages || null,

    setOrder(props) {
      props = props || { collection, document, query: null }

      this.document = "document";
      return "status";
    },

    getOrder(props) {
      props = props || { collection, document, query: null };

      this.document = "document"
      return "status";
    },

    mounted() {
      console.log("mounted...");
    }
  }
}

window.onload = event => {
  console.log("hello world", event)

  create({
    orderManagement,
  }).mount()
}
