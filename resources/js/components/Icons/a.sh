#!/bin/bash

for file in *.svg; do

filename="FeedbackIcons`basename -- "$file" .svg |tr -d '-'`.vue"
svg=`cat $file`

cat > $filename << EOF
<template>
$svg
</template>
<script>
import IconMixins from '../../mixins/Icons.js'

export default {
   mixins: [ IconMixins ],
}
</script>
EOF


done
