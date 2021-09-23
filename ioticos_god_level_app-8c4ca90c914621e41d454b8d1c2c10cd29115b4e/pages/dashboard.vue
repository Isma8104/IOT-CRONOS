<template>
  <div class="row" v-if="$store.state.devices.length > 0">
    <div
      v-for="(widget, index) in $store.state.selectedDevice.template.widgets"
      :key="index"
      :class="[widget.column]"
    >

      <Map v-if="widget.widget == 'Map'" :config="fixWidget(widget)"></Map>
      <Rtnumberchart
        v-if="widget.widget == 'numberchart'"
        :config="fixWidget(widget)"
      ></Rtnumberchart>

      <Iotswitch
        v-if="widget.widget == 'switch'"
        :config="fixWidget(widget)"
      ></Iotswitch>

      <Iotbutton
        v-if="widget.widget == 'button'"
        :config="fixWidget(widget)"
      ></Iotbutton>

      <Iotindicator
        v-if="widget.widget == 'indicator'"
        :config="fixWidget(widget)"
      ></Iotindicator>
    </div>
    <div class="col-12">
      <base-button @click="exportPDF()" type="primary" class="mb-3" size="lg"
        >Add</base-button
      >
    </div>
  </div>
</template>
<script>
import jsPDF from "jspdf";

export default {
  middleware: "authenticated",
  name: "Dashboard",
  data() {
    return {
    };
  },
  mounted() {},
  methods: {
    fixWidget(widget) {
      var widgetCopy = JSON.parse(JSON.stringify(widget));
      widgetCopy.selectedDevice.dId = this.$store.state.selectedDevice.dId;
      widgetCopy.selectedDevice.name = this.$store.state.selectedDevice.name;
      widgetCopy.userId = this.$store.state.selectedDevice.userId;
      if (widget.widget == "numberchart") {
        widgetCopy.demo = false;
      }
      return widgetCopy;
    },
    exportPDF() {
      const doc = new jsPDF();

      doc.text("Hello world!", 10, 10);
      doc.save("a4.pdf");
    }
  }
};
</script>
