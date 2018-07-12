class Github{
    constructor(){
        this.clientid='25386a22135a5138481f';
        this.clientsecret='382a4b88d0c3e7cdde904dafb79726976e1b0381';

    }

    async getuser(user){
        const profile1= await fetch(`https://api.github.com/users/${user}?client_id=${this.clientid}&client_secret=${this.clientsecret}`);
        const profile= await profile1.json();

        return{
            profile
        }
    }
}