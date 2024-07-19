export class ProductFormModel {
    public productId!: string;
    public salerId!: string;
    public productName!: string;
    public description?: string;
    public categories!: string;
    public price!: number;
    public photo!: string;
    public reviews?: Review[];
    private averageRating: number = 0;
    public stockQuantity!: number;
  
    public getAverageRating(): number | null {
      if (!this.reviews || this.reviews.length === 0) return null;
      this.averageRating = this.reviews.reduce((total, review) => total + review.rating, 0) / this.reviews.length;
      return this.averageRating;
    }
  
    private isDeleted: boolean = false;
  
    public deleteMe(): void {
      this.isDeleted = true;
    }
  }
  
  export interface Review {
    rating: number;
    comment: string;
  }
  