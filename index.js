async function main() {
    const data = await axios.get('data.json')
    var app = new Vue({
        el: '#app',
        data: data
    })
}

main()