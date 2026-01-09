---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: minimal
---


<script src="//unpkg.com/alpinejs"></script>

<div x-data="{ open: false }">
    <button @click="open = true">Expand</button>

    <span x-show="open">
        Content...
    </span>
</div>
