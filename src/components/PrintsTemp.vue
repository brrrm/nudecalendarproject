<template>
    <div class="home-container">
        <top-bar />

        <product-grid />
    </div>
</template>

<script>
    import TopBar from "@/components/TopBar";
    import ProductGrid from "@/components/ProductGridPrints";

    export default {
        name: 'Prints',
        components: {
            ProductGrid,
            TopBar,
        },
    };
</script>
