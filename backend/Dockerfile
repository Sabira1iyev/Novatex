# Resmi Python imajını kullanıyoruz (hızlı ve hafif olan "slim" versiyonu)
FROM python:3.11-slim

# Linux sunucusuna LaTeX motorlarını ve gerekli derleme araçlarını kuruyoruz
RUN apt-get update && apt-get install -y \
    texlive-latex-base \
    texlive-latex-extra \
    texlive-fonts-recommended \
    latexmk \
    --no-install-recommends && \
    rm -rf /var/lib/apt/lists/*

# Çalışma dizinini belirliyoruz
WORKDIR /app

# Önce sadece requirements.txt dosyasını kopyalıyoruz (Docker önbelleği için)
COPY requirements.txt .

# Python kütüphanelerini kuruyoruz
RUN pip install --no-cache-dir -r requirements.txt

# Şimdi uygulamanın geri kalan tüm kodlarını kopyalıyoruz
COPY . .

# Render'ın portunu kullanmasını sağlıyoruz (Render otomatik PORT değişkeni atar)
CMD ["sh", "-c", "uvicorn app.main:app --host 0.0.0.0 --port ${PORT:-10000}"]
