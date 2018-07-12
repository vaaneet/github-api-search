class UI{
    constructor(){
        this.profile = document.getElementById('profile');
    }

    showprofile(user){
        this.profile.innerHTML = `
        <div class="card card-body mb-3">
            <div class="row">
                <div class="col-lg-4 col-sm-12 col-md-4">
                    <img class="img-fluid mb-2" src="${user.avatar_url}">
                    <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block mb-3">View Profile</a>
                </div>
                <div class="col-lg-8 col-sm-12 col-md-8">
                    <span class="badge badge-primary">Public Repos: ${user.public_repos}</span>
                    <span class="badge badge-secondary">Public Gists: ${user.public_gists}</span>
                    <span class="badge badge-success">Following: ${user.followering}</span>
                    <span class="badge badge-info">Followers: ${user.followers}</span>

                    <br><br>
                </div>
            </div>
        </div>
        `
    }

    clearout(){
        this.profile.innerHTML='';
    }

    alert(message,classname){
        const t1= document.createElement('div');
        t1.className=classname;
        t1.appendChild(document.createTextNode(message));
        const search= document.querySelector('.search'); 
        const t4= document.querySelector('.t3');
        search.insertBefore(t1,t4);
        setInterval(() => {
            t1.remove();
        },2000)
    }
}






