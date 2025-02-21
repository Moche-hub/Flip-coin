let score= JSON.parse(localStorage.getItem('score'))
        if(score===null){
            score={
                win:0,
                lose:0,
            };
        }

        
        
        function random(){
            let computer=Math.random();
            computer1=''
            if (computer>0 && computer<1/2){
                computer1='head'
            }else if(computer>1/2 && computer<1){
                computer1='tail'
            }
            return computer1;
        }
        function head1(coin){
            a=random()
            result=''
            if (coin==='head'){
                if(a==='head'){
                result='You won'

            }else if(a==='tail'){
                result='You lose'
            }
        }
        if(coin!=='head'){
            if(a==='tail'){
                result='You won'
            }else if(a==='head'){
                result='You lose'
            }
        }
        if (result==='You won'){
            score.win+=1
        }else if(result==='You lose'){
            score.lose+=1
        }
        localStorage.setItem('score',JSON.stringify(score));
        document.querySelector('.res').innerHTML=`${result}`
        document.querySelector('.res1').innerHTML=`<img src="${a}.png">`;
        document.querySelector('.score').innerHTML=`Win:${score.win}, Loose:${score.lose}`;
    }