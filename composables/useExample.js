export default function () {
  return useState('foo', () => 'bar')
}

export const useFoo = () => {
  return useState('foo', () => 'bar')
}


{/* <template>
  <div>
    {{ foo }}
  </div>
</template>
<script setup>
const foo = useFoo()
</script> */}