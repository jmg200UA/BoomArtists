import { Component, OnInit } from '@angular/core';
import { LastfmService } from 'src/app/lastfm.service';
import { Router } from '@angular/router';
import { BoomartistsService } from 'src/app/boomartists.service';

@Component({
  selector: 'app-dia3',
  templateUrl: './dia3.page.html',
  styleUrls: ['./dia3.page.scss'],
})
export class Dia3Page implements OnInit {
  topTracks: any[] = [];
  showTrackList: boolean = false;

  constructor(private lastfmService: LastfmService,
              private boomartistsService: BoomartistsService,
              private router: Router) { }

  ngOnInit() {
  }

  cantantes = [
    { title: 'Bizarrap', image: 'https://s1.abcstatics.com/abc/www/multimedia/play/2023/06/29/bizarrap_20230629173008-RUAgdAY413moo3US70riTQM-366x256@abc.jpg' },
    { title: 'Bad Gyal', image: 'https://phantom-marca.unidadeditorial.es/9062d6960dfb85ac020e3f4acdac1ff6/resize/828/f/jpg/assets/multimedia/imagenes/2023/06/08/16862266762736.jpg' },
    { title: 'Danny Ocean', image: 'https://www.getin.es/wp-content/uploads/2022/02/Danny01981-scaled-2-e1662648675739.jpg' },
    { title: 'Funzo & Baby Loud', image: 'https://www.lavozdegalicia.es/default/2022/07/14/00121657821062282182547/Foto/H14L2057.jpg' },
    { title: 'Lali', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Lali_47st_2021.jpg/640px-Lali_47st_2021.jpg' },
    { title: 'Ptazeta', image: 'https://dynamicmedia.livenationinternational.com/Media/i/x/l/b6c199be-ecca-4f85-8b95-12d9cdee049c.jpg' },
    { title: 'Taburete', image: 'https://imagenes.elpais.com/resizer/ovuYzKAC9ak6EE_G-isyqYqPYAY=/414x0/cloudfront-eu-central-1.images.arcpublishing.com/prisa/SM62HQKL652RYH4AHIPJQTHWVA.jpg' },
    { title: 'Jaime Lorente', image: 'https://imagenes.20minutos.es/files/og_thumbnail_1900/uploads/imagenes/2021/09/01/jaime-lorente-6.jpeg' },
    { title: 'Maikel Delacalle', image: 'https://elapuron.com/media/2020/02/post/Progama-los-Indianos-crop.jpg' },
    { title: 'Pole', image: 'https://www.encastillalamancha.es/wp-content/uploads/2022/02/pole.-portada.jpg' },
    { title: 'Daviles de Novelda', image: 'https://album.mediaset.es/eimg/10000/2022/02/18/clipping_714NGd_44a9.jpg?w=1200&h=900' },
    { title: 'Rojuu', image: 'https://www.beatburguer.com/wp-content/uploads/2019/12/rojuu__1920x964-1024x737.jpg' },
    { title: 'Ly Raine', image: 'https://s3.ppllstatics.com/lasprovincias/www/multimedia/202208/31/media/cortadas/DSC_0349%20-%202-R3HnAWU6fUn7Wa0k50gn2QL-1248x770@Las%20Provincias.jpg' },
    { title: 'Meler', image: 'https://s3.ppllstatics.com/lasprovincias/www/multimedia/202212/20/media/cortadas/meler-kmDB-U19019339036R6B-1248x770@Las%20Provincias.jpg' },
    { title: 'The Otter Gang', image: 'https://houseandujar.files.wordpress.com/2018/03/the-otter-gang-poster.jpg?w=1070&h=747&crop=1' },
  ];


  //Funcion para cambiar el valor del cantante al seleccionarlo para poderlo pasar por parámetro
  cambiarCantante(cantante: string){
    this.boomartistsService.setStringValue(cantante);
    this.router.navigate(['/artista']);
  }

}
