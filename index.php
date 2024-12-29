<?php
include 'header.php';
?>
<main class="p-4">
    <div class="mb-4">
        <label for="category-filter" class="block mb-2 font-medium">Filter by Category:</label>
        <select id="category-filter" class="p-2 border border-gray-300 rounded">
            <option value="all">All Categories</option>
        </select>
    </div>
    <div id="product-list" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        
    </div>
</main>
<?php
include 'footer.php';

?>