# data_generator.py

import json
from datetime import datetime, timedelta

# --- FUNGSI PYTHON (MODULAR) UNTUK MEMBUAT DATA ---
def generate_pasang_surut(start_date, num_days=7):
    """
    Menghasilkan data pasang surut dummy untuk beberapa hari.
    Ini adalah bukti penggunaan fungsi dan loop yang efisien.
    """
    
    list_pasang_surut = []
    
    # Nilai awal (bisa kamu ubah)
    pasang_waktu = 15.5  # 15:30
    surut_waktu = 9.0    # 09:00
    
    for i in range(num_days):
        tanggal = start_date + timedelta(days=i)
        
        # Simulasi pergeseran waktu harian (sekitar 30-45 menit)
        pasang_waktu += 0.5 
        surut_waktu += 0.75
        
        # Reset jika melewati 24 jam
        if pasang_waktu >= 24: pasang_waktu -= 24
        if surut_waktu >= 24: surut_waktu -= 24
        
        # Data yang akan dimasukkan ke website
        data_harian = {
            "hari": tanggal.strftime("%A"),
            "tanggal": tanggal.strftime("%d %b"),
            "waktu_pasang": f"{int(pasang_waktu):02d}:{int((pasang_waktu % 1) * 60):02d}",
            "tinggi_pasang": f"{2.1 - (i*0.05):.1f}m", # Simulasi tinggi pasang yang berubah
            "waktu_surut": f"{int(surut_waktu):02d}:{int((surut_waktu % 1) * 60):02d}",
            "tinggi_surut": f"{0.5 + (i*0.05):.1f}m"
        }
        list_pasang_surut.append(data_harian)
        
    return list_pasang_surut

# --- EKSEKUSI DAN EXPORT DATA ---
if __name__ == "__main__":
    start_date = datetime.now()
    data_final = generate_pasang_surut(start_date, 7)
    
    # Print ke konsol untuk dicek
    print("--- Data Python Siap Export ---")
    
    # Ekspor ke file JSON agar mudah di-copy ke JavaScript
    with open('data_pasang_surut.json', 'w') as f:
        json.dump(data_final, f, indent=4)
        
    print("\nData berhasil disimpan ke 'data_pasang_surut.json'.")
    print("Salin data dari JSON ini ke array di script.js!")
