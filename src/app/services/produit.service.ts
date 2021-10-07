import { Injectable } from '@angular/core';
import {Produit} from '../model/produit.model';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from "@angular/common/http";

const httpOptions = {
  headers : new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class ProduitService {
  apiUrl: string='http://localhost:8081/produits/api';

  produits : Produit[];
  //produit : Produit;

  constructor(private http: HttpClient) { 
    /*this.produits=[
      { idProduit : 1, nomProduit : "PC Asus  ", prixProduit : 3000.600, dateCreation : new Date("01/14/2011")},
      { idProduit : 2, nomProduit : "Imprimante Epson", prixProduit : 450, dateCreation : new Date("12/17/2010")},
      { idProduit : 3, nomProduit :"Tablette Samsung", prixProduit : 900.123, dateCreation : new Date("02/20/2020")}
    ];*/
  }

  /*listProduits():Produit[] {
    return this.produits;
  }*/
  listProduits(): Observable<Produit[]>{
    return this.http.get<Produit[]>(this.apiUrl);
  }

  /*ajouterProduit(prod: Produit){
    this.produits.push(prod);
  }*/
  ajouterProduit(prod: Produit): Observable<Produit>{
    return this.http.post<Produit>(this.apiUrl, prod, httpOptions);
  }

  /*supprimerProduit(prod: Produit){
    //supprimer le produit prod du tableau de produits
    const index=this.produits.indexOf(prod, 0);
    if(index > -1){
      this.produits.splice(index, 1)
    }
  }*/

  supprimerProduit(id:number){
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete(url, httpOptions);
  }

 /* consulterProduit(id:number): Produit{
    return this.produits.find(p => p.idProduit == id);
   // return this.produit;
    }*/

    consulterProduit(id:number): Observable<Produit>{
      const url = `${this.apiUrl}/${id}`;
      return this.http.get<Produit>(url);
    }

    /*trierProduits(){
      this.produits = this.produits.sort((n1,n2) => {
        if (n1.idProduit > n2.idProduit) {
            return 1;
        }
       if (n1.idProduit < n2.idProduit) {
         return -1; 
        }
        return 0;
       });
}*/

    /*updateProduit(p: Produit){
      //this.supprimerProduit(p);
      this.ajouterProduit(p);
      this.trierProduits();
    }*/
    updateProduit(id: number, prod: Produit): Observable<Produit>{
      return this.http.put<Produit>(`${this.apiUrl}/${id}`, prod, httpOptions);
    }

}
