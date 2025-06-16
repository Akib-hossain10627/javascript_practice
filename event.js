console.log('dom events')
// const btn=document.getElementById('button');
// console.log(btn);
function makeRed() {
            document.body.style.backgroundColor = 'red';
        }


        const makePurple = document.getElementById('purple')
        // console.log(makePurple);
        makePurple.onclick = purpleButton;

        function purpleButton() {
            document.body.style.backgroundColor = 'purple';
        }

         const pinkButton = document.getElementById('pink');
        pinkButton.addEventListener('click', makePink);

        function makePink() {
            document.body.style.backgroundColor = 'pink';
        }

        const greenButton = document.getElementById('green');
        greenButton.addEventListener('click', function makeGreen() {
            document.body.style.backgroundColor = 'green'
        });


 function handleOnClick() {
        const handleStatus = document.getElementById('handle-status');
        handleStatus.innerText = 'dom just changed by a click';
    }
   

    
        document.getElementById('event').addEventListener('click', function () {
            const handle = document.getElementById('handle-status');
            handle.innerText = 'changed again'
        })

    