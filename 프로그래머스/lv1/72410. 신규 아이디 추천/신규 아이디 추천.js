function solution(new_id) {
    let special = "~!@#$%^&*()=+[{]}:?,<>/".split('');
    
    //1단계
    new_id = new_id.toLowerCase();
    
    //2단계
    special.map(x => new_id = new_id.replaceAll(x, ''));
    
    //3단계
    new_id = [...new_id];
    let sum = 0;
    
    for(let i = 0; i < new_id.length; i++){
        if(new_id[i] === '.') sum++;
        else if(new_id[i] !== '.') sum = 0;
        if(new_id[i] === '.' && sum >= 2){
            sum++;
            new_id[i] = '@';
        }
    };
    new_id = new_id.join('');
    new_id = new_id.replaceAll('@', '');

    //4단계
    if(new_id[0] === '.') new_id = new_id.replace('.', '');
    if(new_id[new_id.length - 1] === '.') new_id = new_id.slice(0, new_id.length - 1);
    
    //5단계
    if(new_id.length === 0) new_id = 'a';
    
    //6단계
    if(new_id.length >= 16) new_id = new_id.slice(0, 15);
    if(new_id[new_id.length - 1] === '.') new_id = new_id.slice(0, 14);
    
    //7단계
    if(new_id.length <= 2) new_id = new_id + new_id[new_id.length - 1].repeat(3 - new_id.length);
    
    return new_id;
}