async function main() {
    const data = await axios.get('data.json').data
    var app = new Vue({
        el: '#app',
        data: data
    })
}

main()