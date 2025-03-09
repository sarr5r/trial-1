document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('nav a');
    
    for (const link of navLinks) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            window.scrollTo({
                top: targetElement.offsetTop - 70,
                behavior: 'smooth'
            });
        });
    }
    
    // Animation for coffee icon
    const coffeeIcon = document.querySelector('.coffee-icon');
    
    if (coffeeIcon) {
        coffeeIcon.style.transition = 'transform 0.5s ease-in-out';
        
        setInterval(() => {
            coffeeIcon.style.transform = 'rotate(5deg)';
            
            setTimeout(() => {
                coffeeIcon.style.transform = 'rotate(-5deg)';
                
                setTimeout(() => {
                    coffeeIcon.style.transform = 'rotate(0)';
                }, 500);
            }, 500);
        }, 5000);
    }
    
    // Highlight active section in navigation
    window.addEventListener('scroll', function() {
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('nav a');
        
        let currentSection = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.clientHeight;
            
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                currentSection = '#' + section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === currentSection) {
                link.classList.add('active');
            }
        });
    });
    
    // Add hover effect to roast visuals
    const roastVisuals = document.querySelectorAll('.roast-visual');
    
    roastVisuals.forEach(visual => {
        visual.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.1)';
            this.style.transition = 'transform 0.3s ease';
        });
        
        visual.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });
    
    // Interactive flavor wheel
    const flavorWheel = document.getElementById('flavor-wheel');
    const selectedFlavorText = document.getElementById('selected-flavor');
    const flavorInfoText = document.getElementById('flavor-info');
    
    if (flavorWheel) {
        // Create flavor wheel segments
        const flavors = {
            'fruity': {
                color: '#e74c3c',
                description: 'Fruity notes can include berries, stone fruits, citrus, or tropical fruits. Often found in light to medium roasts and African coffees.',
                children: {
                    'berry': { color: '#c0392b', description: 'Berry notes like blueberry, strawberry, or blackberry. Common in Ethiopian coffees.' },
                    'citrus': { color: '#e67e22', description: 'Bright notes like lemon, orange, or grapefruit. Associated with high acidity coffees.' },
                    'stone-fruit': { color: '#d35400', description: 'Notes of peach, apricot, or nectarine. Often found in washed Central American coffees.' },
                    'tropical': { color: '#f1c40f', description: 'Flavors like mango, papaya, or pineapple. Common in some African and island coffees.' }
                }
            },
            'sweet': {
                color: '#3498db',
                description: 'Sweet notes provide pleasant, sugary flavors that balance acidity and bitterness in coffee.',
                children: {
                    'caramel': { color: '#2980b9', description: 'Rich, buttery sweetness with a slight burnt sugar quality. Common in medium roasts.' },
                    'chocolate': { color: '#34495e', description: 'Cocoa flavors ranging from milk chocolate to dark chocolate. Often found in medium-dark roasts.' },
                    'honey': { color: '#f39c12', description: 'Floral sweetness similar to honey. Often present in honey-processed coffees.' },
                    'vanilla': { color: '#ecf0f1', description: 'Smooth, creamy sweetness. Can be found in medium roasts from Central and South America.' }
                }
            },
            'nutty': {
                color: '#9b59b6',
                description: 'Nutty flavors are common in medium roasts and South American coffees.',
                children: {
                    'almond': { color: '#8e44ad', description: 'Light, clean nutty flavor. Common in Brazilian coffees.' },
                    'peanut': { color: '#7f8c8d', description: 'Roasted peanut notes. Often found in Indonesian and some African coffees.' },
                    'hazelnut': { color: '#95a5a6', description: 'Sweet, roasted nut flavor. Common in medium roast Colombian coffees.' }
                }
            },
            'spicy': {
                color: '#2ecc71',
                description: 'Spice notes add complexity and depth to coffee flavor profiles.',
                children: {
                    'cinnamon': { color: '#27ae60', description: 'Warm, sweet spice notes. Often found in lighter roasts.' },
                    'clove': { color: '#16a085', description: 'Intense, aromatic spice notes. Can be found in some Indonesian coffees.' },
                    'pepper': { color: '#1abc9c', description: 'Subtle spicy kick. Sometimes found in darker roasts and robusta blends.' }
                }
            }
        };
        
        // Draw the flavor wheel
        createFlavorWheel(flavorWheel, flavors);
        
        // Add interactivity to flavor tags
        const flavorTags = document.querySelectorAll('.flavor-tag');
        flavorTags.forEach(tag => {
            tag.addEventListener('click', function() {
                const flavor = this.getAttribute('data-flavor');
                const flavorDescriptions = {
                    'chocolate': 'Our beans exhibit rich milk chocolate notes with hints of dark cocoa on the finish.',
                    'caramel': 'A smooth caramel sweetness balances the acidity in our medium roast.',
                    'nutty': 'Toasted almond and walnut notes provide depth and complexity.',
                    'red-fruit': 'Subtle cherry and raspberry notes can be detected, especially as the coffee cools.',
                    'citrus': 'A gentle orange-like brightness adds vibrancy to the cup.'
                };
                
                selectedFlavorText.textContent = this.textContent;
                flavorInfoText.textContent = flavorDescriptions[flavor] || 'A delightful flavor in our coffee.';
                
                // Highlight the selected tag
                flavorTags.forEach(t => t.classList.remove('active-flavor'));
                this.classList.add('active-flavor');
            });
        });
    }
    
    // Cultivation process animation
    const processSteps = document.querySelectorAll('.process-step');
    processSteps.forEach(step => {
        step.addEventListener('mouseenter', function() {
            this.style.backgroundColor = '#f0e6d8';
        });
        
        step.addEventListener('mouseleave', function() {
            this.style.backgroundColor = '';
        });
    });
    
    // Method cards hover effect
    const methodCards = document.querySelectorAll('.method-card');
    methodCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
            this.style.transition = 'all 0.3s ease';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = '';
            this.style.boxShadow = '';
        });
    });
    
    // Interactive coffee origins map
    const worldMap = document.getElementById('world-coffee-map');
    if (worldMap) {
        initializeWorldMap(worldMap);
    }
});

function initializeWorldMap(container) {
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('viewBox', '0 0 1000 500');
    svg.setAttribute('width', '100%');
    svg.setAttribute('height', '100%');
    container.appendChild(svg);
    
    // Create base world map
    const worldPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    worldPath.setAttribute('d', WORLD_MAP_PATH);
    worldPath.setAttribute('fill', '#e8e0d8');
    worldPath.setAttribute('stroke', '#d4a76a');
    worldPath.setAttribute('stroke-width', '1');
    svg.appendChild(worldPath);
    
    // Add coffee belt indicator
    const coffeeBelt = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    coffeeBelt.setAttribute('d', 'M50,200 Q500,150 950,200');
    coffeeBelt.setAttribute('stroke', '#6b4423');
    coffeeBelt.setAttribute('stroke-width', '20');
    coffeeBelt.setAttribute('stroke-opacity', '0.2');
    coffeeBelt.setAttribute('fill', 'none');
    svg.appendChild(coffeeBelt);
    
    // Add major coffee regions
    const regions = [
        {name: 'Colombia', x: 235, y: 255, notes: 'Known for balanced acidity, rich flavor, and medium body.'},
        {name: 'Brazil', x: 300, y: 300, notes: 'Largest producer, with beans that typically offer nutty, chocolate notes with low acidity.'},
        {name: 'Ethiopia', x: 550, y: 245, notes: 'Birthplace of coffee, producing beans with floral and fruity notes.'},
        {name: 'Kenya', x: 550, y: 275, notes: 'Known for bright, fruity acidity with blackcurrant and berry notes.'},
        {name: 'Indonesia', x: 760, y: 275, notes: 'Produces earthy, spicy, and herbal coffees with full body.'},
        {name: 'Vietnam', x: 730, y: 220, notes: 'Second largest producer, mostly Robusta beans with strong, bold flavors.'},
        {name: 'Guatemala', x: 200, y: 230, notes: 'Produces complex coffees with chocolate and spice notes.'},
        {name: 'Costa Rica', x: 217, y: 245, notes: 'Known for clean, bright coffees with classic flavor profiles.'},
        {name: 'Jamaica', x: 240, y: 220, notes: 'Home to the famous Blue Mountain coffee with mild flavor and lack of bitterness.'}
    ];
    
    regions.forEach(region => {
        // Create marker
        const marker = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        marker.setAttribute('cx', region.x);
        marker.setAttribute('cy', region.y);
        marker.setAttribute('r', '5');
        marker.setAttribute('fill', '#c0392b');
        marker.setAttribute('class', 'coffee-region-marker');
        marker.setAttribute('data-region', region.name);
        marker.setAttribute('data-notes', region.notes);
        svg.appendChild(marker);
        
        // Create label
        const label = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        label.setAttribute('x', region.x + 10);
        label.setAttribute('y', region.y + 5);
        label.setAttribute('font-size', '12');
        label.setAttribute('fill', '#3c2415');
        label.textContent = region.name;
        svg.appendChild(label);
        
        // Add hover interaction
        marker.addEventListener('mouseenter', function() {
            this.setAttribute('r', '8');
            document.getElementById('region-name').textContent = region.name;
            document.getElementById('region-notes').textContent = region.notes;
        });
        
        marker.addEventListener('mouseleave', function() {
            this.setAttribute('r', '5');
        });
    });
}

const WORLD_MAP_PATH = "M781.68,324.4l-2.31,8.68l-12.53,4.23l-3.75-4.4l-1.82,1.3l2.31,3.4l-5.71,0.43l-5.43-6.69l-4.01-0.38l-2.23,1.87l-1.43,0.92l-4.39-0.05l-1.21-3.13l-5.31-1.06l-2.67,3.06l-0.16,2.81l-2.68,1.74l-6.3-0.24l-0.7-3.07l-5.86-0.16l-0.79-12.07l2.14-2.34l-2.2-5.28l-0.77-8.42l3.31-3.59l6.12-3.3l8.49,3.95l9.82,6.17l6.78-1.85l2.63,1.27l4.65,6.8l1.48-0.59l4.54,1.86l4.16-0.17l0.3,9.99L781.68,324.4zM722.48,317.57l-0.92,2.95l-4.89-0.17l-6.15-6.32l-2.06-6l6.58-4.05l1.22-3.38l-1.52-6.31l0.86-1.85l4.77-1.88l2.89,0.4l1.32,2.96l1.59-1.55l-0.81-11.39l4.27-2.7l2.32-9.86l4.39,3.91l3.32-1.88l4.55,7.2l1.03,5.4l0.52,5.4l-2.93,8.2l-2.13,1.36l0.3,6.75l3.28,0.74l0.3,1.58l-3.23,1.93l0.66,5.35l3.77,3.47l-5.5,0.96l-3.75-4.32l-3.61-1.58l-0.01-2.12l-9.12,0.02l-1.04,3.5L722.48,317.57z";

function createFlavorWheel(container, data) {
    const centerX = 175;
    const centerY = 175;
    const outerRadius = 150;
    const innerRadius = 50;
    
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('viewBox', '0 0 350 350');
    svg.setAttribute('width', '100%');
    svg.setAttribute('height', '100%');
    container.appendChild(svg);
    
    // Create main segments
    const mainCategories = Object.keys(data);
    const anglePerSegment = (2 * Math.PI) / mainCategories.length;
    
    mainCategories.forEach((category, index) => {
        const startAngle = index * anglePerSegment;
        const endAngle = (index + 1) * anglePerSegment;
        
        // Create outer segment
        const segment = createSegment(
            centerX, 
            centerY, 
            innerRadius, 
            outerRadius, 
            startAngle, 
            endAngle, 
            data[category].color
        );
        
        segment.setAttribute('data-flavor', category);
        segment.setAttribute('class', 'flavor-segment');
        segment.addEventListener('click', function() {
            document.getElementById('selected-flavor').textContent = category.charAt(0).toUpperCase() + category.slice(1);
            document.getElementById('flavor-info').textContent = data[category].description;
            
            // Reset all segments
            document.querySelectorAll('.flavor-segment').forEach(seg => {
                seg.style.opacity = '1';
            });
            
            // Highlight this segment
            this.style.opacity = '0.8';
        });
        
        svg.appendChild(segment);
        
        // Add label
        const labelAngle = startAngle + (anglePerSegment / 2);
        const labelRadius = innerRadius + ((outerRadius - innerRadius) / 2);
        const labelX = centerX + Math.cos(labelAngle) * labelRadius;
        const labelY = centerY + Math.sin(labelAngle) * labelRadius;
        
        const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        text.setAttribute('x', labelX);
        text.setAttribute('y', labelY);
        text.setAttribute('text-anchor', 'middle');
        text.setAttribute('dominant-baseline', 'middle');
        text.setAttribute('fill', '#fff');
        text.setAttribute('font-size', '12');
        text.setAttribute('font-weight', 'bold');
        text.setAttribute('pointer-events', 'none');
        text.textContent = category.charAt(0).toUpperCase() + category.slice(1);
        
        svg.appendChild(text);
        
        // Create sub-segments if they exist
        if (data[category].children) {
            const subCategories = Object.keys(data[category].children);
            const subAnglePerSegment = anglePerSegment / subCategories.length;
            
            subCategories.forEach((subCategory, subIndex) => {
                const subStartAngle = startAngle + (subIndex * subAnglePerSegment);
                const subEndAngle = startAngle + ((subIndex + 1) * subAnglePerSegment);
                
                const subSegment = createSegment(
                    centerX,
                    centerY,
                    outerRadius,
                    outerRadius + 25,
                    subStartAngle,
                    subEndAngle,
                    data[category].children[subCategory].color
                );
                
                subSegment.setAttribute('data-flavor', subCategory);
                subSegment.setAttribute('class', 'flavor-segment sub-segment');
                subSegment.addEventListener('click', function(e) {
                    e.stopPropagation();
                    document.getElementById('selected-flavor').textContent = subCategory.charAt(0).toUpperCase() + subCategory.slice(1);
                    document.getElementById('flavor-info').textContent = data[category].children[subCategory].description;
                    
                    // Reset all segments
                    document.querySelectorAll('.flavor-segment').forEach(seg => {
                        seg.style.opacity = '1';
                    });
                    
                    // Highlight this segment
                    this.style.opacity = '0.8';
                });
                
                svg.appendChild(subSegment);
            });
        }
    });
    
    // Add center circle
    const centerCircle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    centerCircle.setAttribute('cx', centerX);
    centerCircle.setAttribute('cy', centerY);
    centerCircle.setAttribute('r', innerRadius);
    centerCircle.setAttribute('fill', '#6b4423');
    
    svg.appendChild(centerCircle);
    
    // Add center text
    const centerText = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    centerText.setAttribute('x', centerX);
    centerText.setAttribute('y', centerY);
    centerText.setAttribute('text-anchor', 'middle');
    centerText.setAttribute('dominant-baseline', 'middle');
    centerText.setAttribute('fill', '#fff');
    centerText.setAttribute('font-size', '14');
    centerText.setAttribute('font-weight', 'bold');
    centerText.textContent = 'COFFEE';
    
    svg.appendChild(centerText);
}

function createSegment(cx, cy, innerRadius, outerRadius, startAngle, endAngle, fill) {
    const startX1 = cx + innerRadius * Math.cos(startAngle);
    const startY1 = cy + innerRadius * Math.sin(startAngle);
    const endX1 = cx + innerRadius * Math.cos(endAngle);
    const endY1 = cy + innerRadius * Math.sin(endAngle);
    
    const startX2 = cx + outerRadius * Math.cos(startAngle);
    const startY2 = cy + outerRadius * Math.sin(startAngle);
    const endX2 = cx + outerRadius * Math.cos(endAngle);
    const endY2 = cy + outerRadius * Math.sin(endAngle);
    
    const largeArcFlag = endAngle - startAngle > Math.PI ? 1 : 0;
    
    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute('d', `
        M ${startX1} ${startY1}
        A ${innerRadius} ${innerRadius} 0 ${largeArcFlag} 1 ${endX1} ${endY1}
        L ${endX2} ${endY2}
        A ${outerRadius} ${outerRadius} 0 ${largeArcFlag} 0 ${startX2} ${startY2}
        Z
    `);
    path.setAttribute('fill', fill);
    path.setAttribute('stroke', '#fff');
    path.setAttribute('stroke-width', '1');
    
    return path;
}