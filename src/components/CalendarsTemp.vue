<template>
    <div class="home-container">
        <top-bar />

        <product-grid />
    </div>
</template>

<script>
    import TopBar from "@/components/TopBar";
    import ProductGrid from "@/components/ProductGridCalendars";

    export default {
        name: 'Calendars',
        components: {
            ProductGrid,
            TopBar,
        },
    };
</script>
