import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GlobalConstantsService {
  public static readonly KRAKEN_URL = environment.krakenUrl;
  
  // Можете добавить другие глобальные константы здесь
  // public static readonly COINBASE_URL = environment.coinbaseUrl;
  // public static readonly BINANCE_URL = environment.binanceUrl;
}
