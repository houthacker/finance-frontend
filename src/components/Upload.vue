<template>
  <div class="upload-btn">
    <form ref="upload" id="upload" action="http://localhost:3030/upload" method="post" encType="multipart/form-data">
      <input type="hidden" name="record_type" value="asn" />
      <input type="file" name="records" />
      <button type="submit">Upload</button>
    </form>
  </div>
</template>

<script>

</script>
