import { Component, OnInit } from '@angular/core';
import { LastfmService } from 'src/app/lastfm.service';
import { Router } from '@angular/router';
import { BoomartistsService } from 'src/app/boomartists.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.page.html',
  styleUrls: ['./artista.page.scss'],
})
export class ArtistaPage implements OnInit {
  topTracks: any[] = [];
  showTrackList: boolean = false;
  cantante: string = "";
  artista: any;

  //Array cantantes
  cantantes = [
    { title: 'Duki', image: 'https://www.rionegro.com.ar/wp-content/uploads/2020/09/unnamed-5.jpg' },
    { title: 'Farruko', image: 'https://yt3.googleusercontent.com/hzEyh_JV5MX3m1ragdHDs-Kl7crx660ahK2fkvd4HgZxes3uAV9KNRjLOjC1qk8As7OMdRNl0D0=s900-c-k-c0x00ffffff-no-rj' },
    { title: 'C.R.O', image: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYWFRgWFhYZGBgaHB4cGhwcHBweHhweHBwaGhofHh4fIS4lHCErJBwcJjgmKy8xNTU1HiQ7QDs0Py40NTEBDAwMEA8QGhISHjEhJCE0NDQ0MTQxNDQ0NDQ0NDE0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDE0NDQ/NDE/NDQ0P//AABEIAOAA4QMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAABAAIEBQYDBwj/xAA7EAABAwIDBQcDAwIFBQEAAAABAAIRAyEEEjEFIkFRYQYycYGRofATscFCUtHh8QcUYnKSFSMkM4IW/8QAGQEAAwEBAQAAAAAAAAAAAAAAAAECAwQF/8QAIREBAQEBAAIDAAIDAAAAAAAAAAECEQMhEjFBImETUZH/2gAMAwEAAhEDEQA/AN+gU4lNKoGwmynSg5BmlMcnOQlIzJ9U0hOKakCPz7IEokIJACE0n580UHbW16eGZnef9rR3nHp/K8x212mr4gkF5Yw6MbMR1P6krTeg7R7S4alY1A5w/SzePtZUOI7fMncpOPiQPtKwQCUpdDau7eu4UR5v/ouNTt286UWD/wCnH8LIEJFLoal/batNmMH/ACP5TXdtK8dxg8j/ACswSkjo60lDtjWB32scOXd+yusD2opPs/cdyPd/5aLBFBEo69UztOhBnkubnDmvNqGKezuPc2TJjT00Vvh+0DrB/DjwT6qVr3hYjb7f+6bK+w21gbErP7fqB1S3JH4KrQumHplzgOq5cv7K57PZM5nvcESdS7bXljGMFrXUHZFcteBOpVv2hoSzMOCz+CdD2+Kq+qD7c/dJcMx+H+qKZPoJNRKBCpJpCaSnFNegGuQKJQSMwpsJxQCAbUeAC5xEAXJ4dSV53tzt28vLMNlawEjORJdHFoNgPVW3+IG1CxjcOzv1e9/sB08zbwBWOr7GbTYx7nB+8Q5jJuYaWCTzkzF+Cz1r8K6mftW4vFVKzi+o8vcB3nEWnQAcugUeVqcRTZ/097B36dVj3EGWjMXMgXsBb1B4rLFSeddJJAIyhRSk0pFBAGUU1GEAggCkCiCmBQF+qUoIDrTqlp1KVV8mSuaUIKCp+xqkVAoTU+g/K4FOG0+3DFMws5gm77RyPBXONxIfRniqvZVRrXguVX7Ko30+iS6fVHNJMnvqRSKBCojSECiU0oAFNTk1BmwmVqga1z3EBrQSSYgRcldF5Z247ROrVHUWGKTDBj9bmm5PQHQdPBTbw4i7Z2wypVfXbMvlrZjdaLARwtc+McVKxmOoBlGs6XvFPIxhcZs94+oY7pIy+Z6LN4bAVH9xjneAt6qd/wDmsSbmnHi9gI97arG2FfDb7RMVtF9QQSGs/Y0ZW20kDvEAASZ0UMc1OxGyarJlhgawQY8wVC/HNNXx+JSl80QASlMHJEIApJASUCjOnFBAL54oykUpQClBFIpggkAkSlCALTCRF0JRlATBVOQi6itN04vshSbJhMK/MUUMpRTJ9JkJjinuTVokxAJTdEoBhQRJQKDMqWBPj9pXg7HB1QToXX8CZXvFRsggWkH7Lwd1F+fJG/mLYHMGIWW1Z+3sOzMK1zBFhlAtoLTZZbauxqz6rmgyJgO1DbSB0nmtj2bw7qdBjHneAGY9Va1WAAx6rm/t2d98ry9nZmownPUa0ftyg5v+XpMTZWx7O0ajYdc6ZgND0hdO0FZoqtY57Rxu4CZ8VY7PpmAQ2Rzaf4Wfz11t/jx8WQ2r2ErMBfQmo39pgP8AIfq+6yL2kEgggixBBBB5EHQ9F7q2rF7jnIvqom3uzNHGsDnblaN14F/B37h9pXRjffVcfk8fPceKBIqftjY9XDPyVWR+1wu1w6H8aqAFbGzhAJJQkgCEkAUoQBASMpFqCYFIoEpIBAogoSiEB0cUcM6HtPVMRp6jxTKmSko89UlRPpAhNPyESgVZObtUSkUEjA6ppR+f2THvARachOdAWcwHZ6kMTUxGpc6WA6NkbxHUmb8irl2He+4s3l/KJY9uo8VzeTyd9R1eLxSe79pD2GIFlCxJcB0UqnWQxTwRC59e2+ey+3mm3djh1QlgBLtcxNuUEqTszsq5lxWy6SZPQ2A8IvzWpfgZdMCV2pbL5mwSmrzi9Zx3qHs/CFm6Kj367xJvy6WWgw1aABqYsJEny+aKDhnMD2tF2wd+YGYRujmbn0WU7f4WKzHMdvubly8QJsQBe8xHE81Wc3vb6Z7ss5PY9s8aK9T6TRncwljG8HVX2k9GA+pVJtjsg+i0OY7PAGcWBnm3mNTGq03ZjYDqbi+pZ8bua5aDcm/6j84qt7ZbcY1po03h73d9zTOURcTzPRXnWu8iNZz8e1hAkmhEBbuMkgjPzyQhAFI6pBJMF90ZTZRQCJSSHz+yc0eqAcTZJhuEpT8LSLnBvMpwK3O3mkpv+VKSon0OQmOTimlWk1xQJR+6Y82SNUYylVquLW1HU2N/bGZx6k8BZQKba1F2WoQ9s7r416O/adb6LRNZEjquFfFMG73jxa0Zj5xp5rLWexpnXK70sdDTYmBMDW14TcDtL6g32OYDEE8zw8tFX4ms9pzBgLTAIJgg6Aj8hd21czfCy5tXUrsxM6nUrEUWrhUbJXO51dbku1Nt1nftp9HUsPzCkGGiSQPwnN4apjqGa955km3hy8lcnGdvb7VGPrNGdzQxuYg56gkNgASxg3nG3QaaqibimU6hdSw9bFV3GfqPGXUaiRuDrlFrLXf9PadInmfeAePVdm4cMbDRA9zzkp+/0dz+PP8AH4TG4k778jP2U5jwkm/ibKOOx9KjTNTE1IHIERz1/UegWk7RdqKOH3AA99t0HjwzG8X4arNjY2Mx7xUxJNOlq1ptA4BreHibonf98LXPye2Xq0RXqO+izJTbeeTRoT/ChVqZY4hw/p4r0rGYVmGZ9OhTLncN3NJ/c4SNOCzlbsriahLy0NkzvneJOsxYKs7/AOI34fX9soOKRU3aOy6tE77HNaTAJEAqGFtL36cupZ6pAJEoBEhMEEEkQgAi09EgkB/RAPBVzsvC5d890XVIruli5w5HEKoFH/mUlBzFFV1L6WJTU4phVEaSmpxTSEjcMQ0lpA8+om/suWGYGjKBEchrPFSnAJjmxdTYfVZWrlzy39LTHieP5UigwACB5Kh2vXex7gyXGeAkXuR4gpMxdVplwMW6e0+PFcW7/K9er4/FLican6Ccxl9FW4LbGZzWusTwV41vFE5pjuXN5XEG8e6eXi/LxCDqbTqNPbXRH6DY0BVTrO2Ob8cBYNJPLRQsdTq1WQ05J48R9vnFWzaYGjQPJItRZb9iak+mZ2Z2dpUSX5S+of1vgkHXd4N+6tqhtEyeX8rs9q5MNjw4D+VFjTv640aDWcL8TGqkMZJXF5T2VN4AJeoPd9m7Yw1H6bhXgscIIN56Aak+C8g272eqYdrauU/SeTlP7TJhruRiCvXdp7OFcsLnuYacwREXEGQbLli9itfSNNz3PYRBBiD1txC0mrL6+kaxnWeW+3hyCt9v7Dfhn5XXYe47nHA9VUELeXrl1m5vKEo380nFJMgBRBQCKAK6U6pbI4FMa08Au7MI92gThKrOknf5c9UlQfSZTHJxTFaTSgUSUHJGaSmlOJsmOSChpPAdDtRINpg8VcUaDCJIJ9lDq4eathqAT46fhWNFkQFw6nNV6U8ncR0bhmRYAeXspNLRNa1dGJye2O9WnRN0A3wT4Qn1Wvpn0i3VN80nPXJ9Tl4pWw5KbVsLKLUf00+eSNasZEKHXrBouVjqtsxyrV4MJYTFw9vHM6PDr85qpFYvflGn3VzhcIInos5ba2smc+3TtT/6QNQ6pSHj/wB1lvBWGGeA3wkeSre0Qc7D52tzGm9j3NkCQx7XOv4Aqq29tjJhNy1SuC1gtIB7zz0A484W3fbLnpiu2PaM4h5YyPpscb/uItIPALMldKrMphMW+ZyOPdt17At4J5QYNU4ppc4TmsuESpGApZnhMLbZmFaBJAVhHui1toCMXWkDJenoinJJp69/KY5PITSEyNKaUSE1yRmuTDxT3JjkqaFhXkvfp3j7WVi08YWdxdc0qxnuv3mnyv5zPsp+E2s19gfGVyanNXrsnvM4t6bDy+eHmpLGqAzHN4Fc6m0QNCD/AGR8sxPw1qrNz1ydUCo8RtprePkqypt1zu4xx+3qovkaZ8N/WnqYgAKDV2iwfqvx+cFQOfXfrDR5lBuzTq5xKzuq0njkW+I2i0CbFUeLx5ecrdTy/lSxs1vwqXg8A0CwFku9VJI47EwJG8Yn5wWkpMAXGlSgLpXqZGOeBOVpIHOBKvOWW9dU+29pGm9sAGncVYHEiWB3IWN+EhYXFVKrCaj8rmF2RoOrGGS1rb2A94W12qxrKe/SNYGXPIa07xElxB4eE2AWExdZpwzABdrmuO6QN5xNp114KpL0d9M7iHFzpPwLnFz0XSs/M4lNkEron049e7RAEQiUoShMgY2Ve7KwsCdFXbLYC8ArTNyjT58sqzBHN5S4hJ+qQC0DJQenqinSkhD6AKZCcSmFABNcnlMcl0GEJj10cqDbHajD4fdLs7/2NvHidAlafFtWpNcIcA4HWRI91SYrs6wnNTe5h4aub6EyPVZrF/4gPPcptaObjKqsT2wxTv1ho/0tH3U3lVm3P1WpxOBxLLwHjm039DBUGltNrrF1wYI4g8fArIV9qVn9+q93/wBH8KH1WOvFmt8+fUekUns5A+/4UtmIbbT0WT7LVi+WEklt4JmQf4W3wuzm5Z+c/ngufWeXjrxqaz8jmPnj/ZAvPP0UkYMAW9FB2rgCaZIDy4Q4BhMuINhbhzUSW0XUdGV2t7xDR166eamUtpMnK2ScjngxDXQAYBPOZ5WKqMBggGEvYWNqSZu7K5u+x03i2vIiE/6ZqUm04IfJyEhzSWhpduPgWuW8bFa5zxlrXWnoOzNa7iRPQyPsuldktI5gj1Cr9jPIGQl5ENLC9sHLlFpgSQZnyVk5VzjKs3j8VGEL7SKXHnlj7rE7ffDKbOQB1/a0D0la/GUC+i+nmjfc2TFhnzaf7T7rE7T36z+TYb6bx+4Sn215fj6/Wci6QC64hkOIC5hdM9uLU5eEXlOCakUydKdQgyFKp45wvwUIJ7HwCIB/CB1aM2iurNoyRoqMFFV0dc/rjn7JKFdJPpdfSpK5uKLtEx5TtEFMqPDQSSABck+90gvPO3naLOThqbt0f+wjif2+HNTaOI3arte+qXU6JLGaFw1f4HgFjvynEIKTA+aCKCQJxKUoD5CcUBe9jD/5JHNjvYhen4NxiOS8p7K1wzFMcdDLelxb8L1HAYprpI/S4tI5EfJ81zeWfydvhv8ADiwcw8/JIMvqmNrcB5cl18bKId6pae1Mhy/TIpmoWkki0uLTAA0DtQeBnRHHU6r6j2S1rA3MyTaBlkOaLx3pMiRA5oY/A0w573ySQHCxgOFje8OcIb4J9OhUc8ucIcKQa6btfMwAeEgX5dVrGd6ZgKjaT5MufUax4dEk5hlczSGAmCBpJWhefJZ5lMNNPfY5zQxuV5GZtxnbPGAZA1kK9qPsjVEjLbdxpovfuOc2pBBbeHBuUg8rALJ4dhaxz3Ag3JB13ncfAfZbnbdZrGPc4wAFg2sfXkAwwXMa3HLnqontrLzijxok5hcH26/ZRloWYUB7GkbplhBz3zWEhm868GBrCz2Qi3H4F0Y1LHL5c2a9ikUgiPZWyNCUp0JrUwcPdFqbCcAgK3ySSypJk+kyuZCeU0p0RR9q9r/5bDucDvv3WDqePkLrx55JubkmZ5laXt5tL6mJLAZbTGXzN3fwsw5Rb0yShJIlIGpFFAoBFEhKE7kgO+zHhtVh/wBUetvytdsvGvpvqNZLt8GOegI6W49FiWmCDOhB95WzouDa0kS4wd2+pAt019Vj5HT4L6sbHC4xr9NQA7yIt/C74DEF7AXWdxA9fIEQVTUyWkuDSMjDvGwMGWgHiIzTylT8uRxIgwWkcdx5ggjoZIWXG1qzaQZETz5I1nHI6O9BjxhQcBiS/OHG7XubHSTljpEe6nNKc9FVBiawD2NaA5v0xNMDNnBO8IvDhIMnVMrbRqsa1tIZmPJFMu1ZY7pvwI0N+CvX0Bma4WLSfRwgj8+SjYjCtLs4iZlw4HkY4HqquomZY/FufiXsztLWDKCDIDrb0N5zInkrapgmtktESALdNPBScSzM9vipQoggrHWrW+ZM8ZLaFOB58HZbC8TwnQHnCpHYLPTcREsJAcJh0knUrQ7axDQ8taCXNjQA6yRM2G+GH1UvBbPLaQaRBMuI5SZhXjXxnUbzN6486LUgrbb+B+m/NG6778VUkcF1Z18p1w7zc6sp2qUIBIqkkCiB0QCcEwrZKSUeKSaX0gQo+PxIZTe86NaXeglSSsx28xmTCuaNahDfLU+ydOPKqry9znHVxJPibrknlNJUGCSQSlIAl8ukk480AoSGiRQCAJC1GAJqUmPaTmY3I7pGhA91llabC2uaDjIzMd3m/kHwU7ls9NfFqZvtf7N27UYC17c8WIiDE8uPFWeE20zI530yBG+M87ugibm+gGkqO1lOo0PYQ9p9R05hNw2zKZzTJBEAE92+bXqVhbP11cv57aHZGPZUGZjS0AkEEyZs4GZPMq1a9Z/YeEfSJaMuQjgTMjjB5zpPBXrCpv36HPXt2L7KPVPDRLEYtjBvva3xIB8hqs5tDtQyctFhf/qMhvgBEuPQJ/G1PykWuFcHvdHdZYn/AFcQOgHumY/abGuyM3jBLzIhoAJ15mIAWewWyK9eA57mU5JJcMtySTDeJ4yUttjDsyUGPZkLgKjs28CDr78BzT+EhfO0eyWyn1KtStXa6WkQHCJeYI9B91tH4WyzOB7U4TDUm02ufUIB7rdZM6mAo2K/xCJEU6Hm934H8p3FpTyTKd2g2TnpuGhiQTwIuvM3WMK82r2mxFYFrnBrDq1jYnxJk+6o4Wvjzcz2x825qzgFFoSJSlaMiLUWgc/koo5Dy80wqvRJHzSVFx9IFeY/4iY7PWbTBtTF/E/0XpWIqhjXOcbNBJ8F4ftHEmpUfUP6nE+XD2U6OI0WTSncE1wUgEYKASKDCUkSUIQRfCk1skDynlKSdSpZtTAGp+fZMRtcP2WawNe059JY6CDcSdPZY7HUCx7mluUg6G1pt5LQ7H7TPosIddndYJ3zGt9MoH8Ku23tdte+TK4aOkTHLxJTv0qq3DYl7HZmGD7eBGhWn2X2ga5zW1IbaC7gTwP+nzWUzXT6hvwHID2WesTS8+TWfp6zhnDLIuOEX9I1VftepVazM+o6nJsGkANB4vfFz0HGywGA2rVo3pvc0ctR6Gy6bS2xVrx9R8gd1osJ5xzWU8Vla680sWuP2lhv0CrUdxc52UE8zbMfZV7NtVGANZlZH6mtGY+LjJ9FWEpq2mWF1akYjFPf33uf/uJP3K4tKanJ8T2hKMpZD4I5eo+TyQQApq6S0deptz4D+UnVCenh5+vmmALI19OPHhwSDuiCUymBDzzOnCwvPJCPREohOBV/TSRSTJ//2Q==' },
    { title: 'Costa', image: 'https://i.scdn.co/image/ab6761610000e5eba0f89dadaafee32669c9ab4b' },
    { title: 'Hoke & Louis Amoeba', image: 'https://lastfm.freetls.fastly.net/i/u/300x300/a97dfbaaf6d783e87555057a7eaf534d' },
    { title: 'Reality', image: 'https://i.scdn.co/image/ab6761610000e5eb9b6273b832a0e8f423ac0cd8' },
    { title: 'Samuräi', image: 'data:image/jpeg;base64,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' },
    { title: 'Enol', image: 'https://yt3.googleusercontent.com/qoz6pnLnYNDCF0_V4KRGRc0OkowOkGKPpaSCy5FTTBJFm-pTA5b6YA2nmvkbU8b0CbxZnVtvOw=s900-c-k-c0x00ffffff-no-rj' },
    { title: 'Aleesha', image: 'https://www.mondosonoro.com/wp-content/uploads/2019/05/aleesha-1.jpg' },
    { title: 'Abhir Hathi', image: 'https://static.tomaticket.es/img/artista_imagen/152804-152804-abhir-hathi.jpg' },
    { title: 'Bon Calso', image: 'https://www.mondosonoro.com/wp-content/uploads/2022/03/bon-calso.jpg' },
    { title: 'Depol', image: 'https://static.wixstatic.com/media/839e94_7c802ad259ed4d7aaa4789fd5da8a30a~mv2.jpg/v1/fill/w_1000,h_1000,al_c,q_85,usm_0.66_1.00_0.01/839e94_7c802ad259ed4d7aaa4789fd5da8a30a~mv2.jpg' },
    { title: 'Paula Cendejas', image: 'https://cdn.industriaworks.com/wp-content/uploads/sites/2/2021/06/PaulaCendejas.webp' },
    { title: 'Acereda', image: 'https://i.scdn.co/image/ab6761610000e5eb6a02112f479e2be2eeeb6431' },
    { title: 'Izan Llunas', image: 'https://s2.abcstatics.com/abc/www/multimedia/espana/2022/12/29/Izan_20221229182802-R3Z1ruVLvIPegZhGw0op2cO-1200x840@abc.jpg' },
    { title: 'Almacor', image: 'https://i0.wp.com/loblanc.info/wp-content/uploads/2021/03/almacor.jpg?fit=300%2C200&ssl=1' },
  ];

  constructor(private lastfmService: LastfmService,
              private boomartistsService: BoomartistsService,
              private router: Router) { }

  ngOnInit() {
    this.cantante= this.boomartistsService.getStringValue();
    console.log("Entra en artista con: ", this.cantante);

    this.artista = this.cantantes.find(item => item.title === this.cantante);
    console.log("Artista encontrado: ", this.artista);

    this.lastfmService.getTopTracks(this.cantante)
      .then(tracks => this.topTracks = tracks)
      .catch(error => console.error(error));
  }


  // ionViewDidEnter(){
  //   this.cantante= this.boomartistsService.getStringValue();
  //   const artist = this.cantante;
  //   this.lastfmService.getTopTracks(artist)
  //     .then(tracks => this.topTracks = tracks)
  //     .catch(error => console.error(error));
  // }

  // toggleTrackList() {
  //   this.showTrackList = !this.showTrackList;
  // }

}
