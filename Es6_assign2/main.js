
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then((response) => response.json())
            .then((json) => json.forEach(table_ele)
            )

        function table_ele(element, index, arr) {
          
            arr[index] = document.querySelector('#post_table').innerHTML +=
                `<tr >
        <td >${element.postId}</td>
        <td>${element.id}</td>
        <td>${element.name}</td>
        <td>${element.email}</td>
    </tr>`
        }
    